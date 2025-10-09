export function getResetPasswordEmailHtml(
  email: string,
  resetUrl: string
): string {
  return `
  <!DOCTYPE html>
  <html dir="ltr" lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>Reset your password</title>
      <style>
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2)
            format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50PDca1ZL7.woff2)
            format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50BTca1ZL7.woff2)
            format('woff2');
        }
  
        * {
          font-family: 'Inter', Helvetica, Arial, sans-serif;
        }
  
        body {
          background-color: #f3f4f6;
          margin: 0;
          padding: 0;
        }
  
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
  
        .header {
          background-color: #2563eb;
          color: white;
          text-align: center;
          padding: 40px 20px;
        }
  
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
  
        .content {
          padding: 24px;
          color: #111827;
        }
  
        .content p {
          font-size: 16px;
          line-height: 1.6;
        }
  
        .button {
          display: inline-block;
          margin-top: 24px;
          background-color: #2563eb;
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 8px;
          padding: 12px 32px;
        }
  
        .footer {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin: 24px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Password Reset</h1>
        </div>
        <div class="content">
          <p>Hi ${email},</p>
          <p>
            We received a request to reset your password. Click the button below to set a new one:
          </p>
          <a href="${resetUrl}" class="button" target="_blank">Reset Password</a>
          <p>If you didn’t request this, you can safely ignore this email.</p>
          <p>Thanks,<br />The Support Team</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Your App Name. All rights reserved.
        </div>
      </div>
    </body>
  </html>
    `;
}
