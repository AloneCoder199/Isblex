import nodemailer from 'nodemailer';

// Global Transporter Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // 465 -> true, 587 -> false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * 1. Generic Prifya Email Dispatcher (Used for Orders & Transactions)
 */
export async function sendEmail({ to, subject, html }: EmailOptions) {
  const mailOptions = {
    from: `"Prifya Atelier" <${process.env.SMTP_FROM || 'noreply@prifya.com'}>`,
    to: to,
    subject: subject,
    html: html,
  };

  return transporter.sendMail(mailOptions);
}

/**
 * 2. Premium Welcome Email for Registered Patrons (Skincare Theme)
 */
export async function sendWelcomeEmail(toEmail: string, fullName: string) {
  const mailOptions = {
    from: `"Prifya Atelier" <${process.env.SMTP_FROM || 'noreply@prifya.com'}>`,
    to: toEmail,
    subject: 'Welcome to Prifya | Your Skincare Journey Begins',
    html: `
      <div style="background-color: #FAF8F5; color: #292524; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; border: 1px solid #EBE7E0; max-width: 600px; margin: 0 auto; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="color: #4E6151; font-family: Georgia, serif; font-weight: 300; font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Welcome to Prifya</h2>
          <p style="font-size: 11px; color: #A69276; tracking: 0.1em; text-transform: uppercase; margin-top: 5px;">Pure Care. Radiant Results.</p>
        </div>
        
        <hr style="border: 0; border-top: 1px solid #EBE7E0; margin-bottom: 25px;" />
        
        <p style="font-size: 14px; color: #44403C; line-height: 1.6;">Dear <strong>${fullName}</strong>,</p>
        <p style="font-size: 14px; color: #44403C; line-height: 1.6;">Thank you for joining the Prifya community. We are delighted to accompany you on your journey toward healthy, radiant, and beautifully nourished skin.</p>
        
        <div style="background-color: #FFFFFF; border: 1px solid #EBE7E0; padding: 18px; margin: 25px 0; font-size: 13px; color: #57534E; line-height: 1.6; border-radius: 8px;">
          <strong style="color: #4E6151;">ACCOUNT STATUS:</strong> ACTIVE & OPERATIONAL<br/>
          <strong style="color: #4E6151;">REGISTERED EMAIL:</strong> ${toEmail}
        </div>
        
        <p style="font-size: 14px; color: #44403C; line-height: 1.6;">You can now log in to explore your personalized skincare selections, save your preferred rituals, and seamlessly track your future orders.</p>
        <br />
        <p style="font-size: 11px; color: #8C8A85; border-top: 1px solid #E7E5E4; padding-top: 15px; margin-top: 15px;">This is an automated notification tracking string from Prifya Atelier. Please do not reply directly to this message.</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}