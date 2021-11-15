const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/api/contact", async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "emilankerstjerne.portfolio@gmail.com",
          pass: "emil1234!"
        },
    });

    let info = await transporter.sendMail({
        from: '"Emils portfolio" <emilankerstjerne.portfolio@gmail.com>', // sender address
        to: "emil.ankerstjerne@gmail.com", // list of receivers
        subject: `New Message from ${req.body.nameInput}, portfolio`, // Subject line
        text: 
        `
        Name: ${req.body.nameInput}\n
        Email: ${req.body.emailInput}\n
        Phone No.: ${req.body.phoneInput}\n
        Message:\n
        ${req.body.messageInput}`
      });


    res.redirect("/contact");
});

module.exports = {
    router
}