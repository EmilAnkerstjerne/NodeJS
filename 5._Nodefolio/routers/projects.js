const router = require("express").Router();

const projects = [
    {name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"]},
    {name: "Nodefolio", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"]},
    {name: "Adventure XP", category: "Java", technologies: ["Java", "HTML", "CSS", "MySQL"]}
];

router.get("/api/projects", (req, res) => {
    res.send({ projects })
});

module.exports = {
    router
};