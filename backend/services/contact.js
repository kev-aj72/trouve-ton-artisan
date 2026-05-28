const nodemailer = require("nodemailer");

exports.sendContactMail = async (emailArtisan, nom, email, objet, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: emailArtisan,
    replyTo: email,
    subject: objet,
    text: `
Nouveau message depuis Trouve Ton Artisan

Nom : ${nom}
Email : ${email}

Message :
${message}
    `,
  });
};