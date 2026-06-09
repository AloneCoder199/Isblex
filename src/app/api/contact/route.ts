import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 1. Create a secure SMTP Transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === '465', // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, inquiryType, message } = await request.json();

    // Basic Validation Check
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing mandatory fields' }, { status: 400 });
    }

    // EMAIL 1: Notification sent to YOUR business dashboard (concierge@prifya.com)
    const adminMailOptions = {
      from: `"Prifya Atelier System" <${process.env.SMTP_USER}>`,
      to: 'concierge@prifya.com', // Aapka official brand business inbox
      subject: `✨ [NEW INQUIRY]: ${inquiryType}`,
      html: `
        <div style="font-family: sans-serif; color: #3E2A20; max-w: 600px; padding: 20px; border: 1px solid #EBE7E0;">
          <h2 style="color: #8A9A86; border-b: 1px solid #EBE7E0; padding-bottom: 10px;">New Atelier Notification</h2>
          <p><strong>Patron Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Inquiry Channel:</strong> ${inquiryType}</p>
          <div style="background-color: #FDFBF7; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p><strong>Message Narrative:</strong></p>
            <p style="font-style: italic; line-height: 1.6;">"${message}"</p>
          </div>
        </div>
      `,
    };

    // EMAIL 2: Premium Confirmation receipt triggered back to the CUSTOMER
    const customerMailOptions = {
      from: `"Prifya Concierge" <${process.env.SMTP_USER}>`,
      to: email, // User's email address
      subject: 'Your Ritual Inquiry Has Arrived at Prifya Atelier',
      html: `
        <div style="font-family: 'Playfair Display', serif, sans-serif; color: #3E2A20; max-w: 600px; padding: 30px; background-color: #FDFBF7; border: 1px solid #D0C9BC;">
          <h2 style="font-weight: normal; color: #3E2A20; letter-spacing: 1px;">Greetings ${name},</h2>
          <p style="line-height: 1.6; font-size: 14px; color: #3E2A20/90;">
            Thank you for reaching out to the House of Prifya. We have safely cataloged your communication regarding <strong>${inquiryType}</strong>.
          </p>
          <p style="line-height: 1.6; font-size: 14px; color: #3E2A20/90;">
            Our dedicated skin consultants and formulation experts process custom requests with extreme precision. Expect a detailed response within 24 operational hours to guide your skincare journey.
          </p>
          <br />
          <hr style="border: 0; border-top: 1px solid #D0C9BC; margin-bottom: 20px;" />
          <p style="font-size: 12px; color: #8A9A86; uppercase; tracking: 2px; font-weight: bold; margin: 0;">Warmest Regards,</p>
          <p style="font-size: 13px; color: #3E2A20; font-style: italic; margin-top: 5px;">The Prifya Concierge Team</p>
        </div>
      `,
    };

    // Execute both email delivery promises parallelly 
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer Transit Failure:', error);
    return NextResponse.json({ error: 'Fulfillment error during mail transit' }, { status: 500 });
  }
}