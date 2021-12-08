// const router = require("express").Router();
import express from "express";
const router = express.Router();
import { connection } from "../database/connectSqlite.js";

// const projects = [
//     {name: "Node.js Recap", year: "2021", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"], githubLink: "https://github.com/EmilAnkerstjerne/NodeJS", deployedLink: "facebook.com", description: "Website showcasing node knowledge"},
//     {name: "Nodefolio", year: "2021", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"], githubLink: "https://github.com/EmilAnkerstjerne/NodeJS", deployedLink: "", description: "Web portfolio"},
//     {name: "Adventure XP", year: "2021", category: "Java", technologies: ["Java", "HTML", "CSS", "MySQL"], githubLink: "https://github.com/EmilAnkerstjerne/NodeJS", deployedLink: "", description: "Exam project making a system for an adventure park"}
// ];
// projects.forEach(project => connection.run("INSERT INTO projects (name, year, category, technologies, githubLink, deployedLink, description) VALUES (?, ?, ?, ?, ?, ?, ?)", [project.name, project.year, project.category, project.technologies, project.githubLink, project.deployedLink, project.description]));
// connection.run("INSERT INTO projects (name, year, category, technologies, githubLink, deployedLink, description) VALUES (?, ?, ?, ?, ?, ?, ?)", ["123", 123, "123", ["123", "123"], "123", "123", "123"]);




router.get("/api/projects", async (req, res) => {
    // projects.forEach(project => connection.run("INSERT INTO projects (name, year, category, technologies, githubLink, deployedLink, description) VALUES (?, ?, ?, ?, ?, ?, ?)", [project.name, project.year, project.category, project.technologies, project.githubLink, project.deployedLink, project.description]));
    const projects = await connection.all("SELECT * from projects");
    // console.log({ projects })
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

// module.exports = {
//     router
// };
export default {
    router
}