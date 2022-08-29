export default async function handler(req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "bannanazportfolio@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "portfolio email",
    to: "bannanazportfolio@gmail.com",
    subject: `${req.body.values.subject}`,
    text: req.body.message + " | Sent from: " + req.body.values.email,
    html: `<p>Sent from: ${req.body.values.name}</p>
    <p>Contact email: ${req.body.values.email}</p>
    <div>Message: ${req.body.values.message}</div>`,
  };
  try {
    await transporter.sendMail(mailData);
  } catch (err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }
  res.send();
}
