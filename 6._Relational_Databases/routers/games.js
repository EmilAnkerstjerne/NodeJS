import express from "express";
const router = express.Router();

import { connection } from "../database/connectSqlite.js";

router.get("/games", async (req, res) => {

    const games = await connection.all("SELECT * from games");

    res.send(games);    
});

router.post("/games", async (req, res) => {
    const gameToCreate = req.body;

    connection.run("INSERT INTO games ('title') VALUES (?)", [gameToCreate.title]);

    res.send(gameToCreate);
});

export default router;
