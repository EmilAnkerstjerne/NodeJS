// const express = require("express");
// const app = express();
import express from "express";
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// const { createPage } = require("./render.js");
import { createPage } from "./render.js";

// Ready the pages
const frontpagePage = createPage("frontpage/frontpage.html", { title: "Nodefolio | Welcome" });
const cvPage = createPage("cv/cv.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");

// const projectsRouter = require("./routers/projects.js");
import projectsRouter from "./routers/projects.js";
app.use(projectsRouter.router);

// const pageRouter = require("./routers/pages.js");
import pageRouter from "./routers/pages.js";
app.use(pageRouter.router);

// const contactRouter = require("./routers/contact.js");
import contactRouter from "./routers/contact.js";
// const { urlencoded } = require("express");
app.use(contactRouter.router);


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/cv", (req, res) => {
    res.send(cvPage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});