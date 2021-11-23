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

// module.exports = {
//     router
// };
export default {
    router
}