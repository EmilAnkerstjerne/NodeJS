const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");
const navbar = fs.readFileSync("./public/components/nav/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const projects = fs.readFileSync("./public/pages/projects/projects.html").toString();


const projectsRouter = require("./routers/projects.js");
app.use(projectsRouter.router);

app.get("/", (req, res) => {
    res.send(navbar + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(navbar + projects + footer);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});