const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const { promisify } = require('es6-promisify');

const smtpTransport = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
};

const trapTransport = {
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
};

const useTransport = process.env.TRAP_MAIL == 'true' ? trapTransport : smtpTransport;
const transport = nodemailer.createTransport(useTransport);

transport.verify((error, success) => {
  if (error) console.error(`Error verifying transport using host:${useTransport.host}`, error);
  console.log(`Mail ready on ${transport.options.host}`);
});

const passwordResetHTML = (options = {}) => `
<!doctype html>
<html>
  <head></head>
  <body>
    <h2>Password Reset</h2>
    <p>You have requested a password reset. Please click <a href="${
      options.resetURL
    }">here</a> to continue on with resetting your password or visit ${options.resetURL} in your browser.</p>
    <p><strong>Please note this link is only valid for the next hour.<strong></p>
    <p>If you didn't request this email, please ignore it.</p>
  </body>
</html>
`;

exports.sendPasswordReset = async options => {
  const html = passwordResetHTML(options);
  const text = htmlToText.fromString(html);
  const mailOptions = {
    from: 'REPLACE THIS <noreply@EXAMPLE.com>',
    to: options.user.email,
    subject: options.subject,
    html,
    text
  };
  const sendMail = promisify(transport.sendMail);
  return sendMail(mailOptions);
};
