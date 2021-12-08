// const router = require("express").Router();
import express from "express";
const router = express.Router();
import { connection } from "../database/connectSqlite.js";


router.get("/api/projects", async (req, res) => {
    const projects = await connection.all("SELECT * from projects");
    res.send({ projects });
});

router.get("/api/projects/:id", async (req, res) => {
    const project = await connection.all(`SELECT * from projects WHERE id=${req.params.id}`);
    console.log(project.id);
    res.send({ project });
});

router.post("/api/projects", (req, res) => {
    connection.run("INSERT INTO projects (name, year, category, technologies, githubLink, deployedLink, description) VALUES (?, ?, ?, ?, ?, ?, ?)", 
    [req.body.name, req.body.year, req.body.category, req.body.technologies, req.body.githubLink, req.body.deployedLink, req.body.description]);
    res.sendStatus(200);
});

router.put("/api/projects/:id", (req, res) => {
    connection.run(`UPDATE projects SET name = '${req.body.name}', year = '${req.body.year}', category = '${req.body.category}', technologies = '${req.body.technologies}', githubLink = '${req.body.githubLink}', deployedLink = '${req.body.deployedLink}', description = '${req.body.description}' WHERE id = ${req.params.id}`);
    res.sendStatus(200);
});

router.delete("/api/projects/:id", (req, res) => {
    connection.run("DELETE FROM projects WHERE id=?", [req.params.id]);
    res.sendStatus(200);
});

export default {
    router
}