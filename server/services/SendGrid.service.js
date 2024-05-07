const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SendGrid = async (to, subject, text, html) => {
  const msg = {
    to: to,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};

module.exports = SendGrid;
