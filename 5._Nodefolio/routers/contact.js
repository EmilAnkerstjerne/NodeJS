import express from "express";
const router = express.Router();

router.post("/api/contact", async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "emilankerstjerne.portfolio@gmail.com",
          pass: "emil1234!"
        },
    });

    let info = await transporter.sendMail({
        from: '"Emils portfolio" <emilankerstjerne.portfolio@gmail.com>',
        to: "emil.ankerstjerne@gmail.com",
        subject: `New Message from ${req.body.name}, portfolio`,
        text: 
        `
        Name: ${req.body.name}\n
        Email: ${req.body.email}\n
        Phone No.: ${req.body.phone}\n
        Message:\n
        ${req.body.message}`
      }, (error, result) => {
        if(error){
          console.log(error)
          return res.sendStatus(400);
        }else{
          res.sendStatus(200);
        }
      });
});

export default {
  router
}