// const router = require("express").Router();
import express from "express";
const router = express.Router();

router.get("/ballade", (req, res) => {
    res.send("<h1>Sjov</h1>");
});

router.get("/test", (req, res) => {
    res.send()
})

// module.exports = {
//     router
// }

export default {
    router
}