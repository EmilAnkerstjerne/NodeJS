// const router = require("express").Router();
// const nodemailer = require("nodemailer");
import express from "express";
const router = express.Router();

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
        subject: `New Message from ${req.body.name}, portfolio`, // Subject line
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

// module.exports = {
//     router
// }

export default {
  router
}