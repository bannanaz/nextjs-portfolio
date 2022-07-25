export default function handler(req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "bannanazportfolio@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: "portfolio email",
    to: "bannanazportfolio@gmail.com",
    subject: `${req.body.values.subject} From ${req.body.values.name}`,
    text: req.body.message + " | Sent from: " + req.body.values.email,
    html: `<div>${req.body.values.message}</div><p>Sent from:
    ${req.body.values.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  console.log(req.body);
}
