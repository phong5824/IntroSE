require("dotenv").config();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const sendverificationLink = async (email, subject, link) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: "Verify your account",
      html: `<h1>Verify your account</h1>
      <p>Click this link to verify your account</p>
      <a href="${link}">Click here</a>
      <p>This link will expire in 10 minutes</p>
      <p>Thanks</p>
      <p>Team</p>`,
    });
    console.log("email sent successfully");
    return true;
  } catch (error) {
    console.log("email not sent!");
    console.log("user: ", process.env.USER);
    console.log("pass: ", process.env.PASS);
    console.log(error);
    return false;
  }
};

module.exports = sendverificationLink;
