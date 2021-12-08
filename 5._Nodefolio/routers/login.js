import express from "express";
const router = express.Router();
import { connection } from "../database/connectSqlite.js";
import { checkPassword } from "../util/encryption.js";


router.post("/api/login", async (req, res) => {
    const enteredUsername = req.body.username;
    const enteredPassword = req.body.password;
    
    const correctHash = await connection.all(`SELECT password FROM admin WHERE username="${enteredUsername}"`);

    if(correctHash[0]?.password && await checkPassword(correctHash[0]?.password, enteredPassword)) {
        req.session.isAuthorized = true;
        return res.sendStatus(200);
    } else {
        return res.sendStatus(400);
    }
});

export default {
    router
}