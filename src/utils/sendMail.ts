import nodemailer from 'nodemailer';

export async function sendWelcomeEmail(toEmail: string, fullName: string) {
  // Transporter config - standard domain SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com', // Aap apna SMTP host lagayein
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // 465 ke liye true, 587 ke liye false
    auth: {
      user: process.env.SMTP_USER, // Aap ki email id
      pass: process.env.SMTP_PASS, // Aap ka email password ya app password
    },
  });

  // Cyberpunk/ISBLEX theme HTML payload
  const mailOptions = {
    from: `"ISBLEX Core" <${process.env.SMTP_FROM || 'noreply@isblex.com'}>`,
    to: toEmail,
    subject: '⚡ [ISBLEX] System Access Granted - Welcome to the Matrix',
    html: `
      <div style="background-color: #0A0A0A; color: #F8FAFC; font-family: monospace; padding: 40px; border: 1px solid #1E293B; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22D3EE; text-transform: uppercase; letter-spacing: 2px;">// ACCESS INITIALIZED</h2>
        <hr style="border-color: #1E293B; margin-bottom: 20px;" />
        <p>Greetings <strong>${fullName}</strong>,</p>
        <p>Your identity node has been successfully synchronized and registered into the ISBLEX database matrix.</p>
        
        <div style="background-color: #111827; border: 1px solid #22D3EE; padding: 15px; margin: 20px 0; font-size: 13px; color: #94A3B8;">
          <strong>NODE STATUS:</strong> OPERATIONAL<br/>
          <strong>SECURE ANCHOR:</strong> ${toEmail}
        </div>
        
        <p>You can now log in and access your decentralized security panel management interface.</p>
        <br />
        <p style="font-size: 11px; color: #64748B;">This is an automated encrypted transmission. Do not reply to this node.</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}