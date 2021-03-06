import express from "express";
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Import session and setup authorization function
import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

function isAuthorized(req, res, next){
    if (!req.session.isAuthorized) {
        return res.status(403).redirect("/admin");
    }
    next();
}

// Import and ready the pages with rendering engine
import { createPage } from "./render.js";
import { createPageNoNav } from "./render.js";

const frontpagePage = createPage("frontpage/frontpage.html", { title: "Nodefolio | Welcome" });
const cvPage = createPage("cv/cv.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");
const dashboardPage = createPage("dashboard/dashboard.html");
const addProjectPage = createPage("addProject/addProject.html");
const loginPage = createPageNoNav("login/login.html");


// Routers
import projectsRouter from "./routers/projects.js";
app.use(projectsRouter.router);

import loginRouter from "./routers/login.js";
app.use(loginRouter.router);

import contactRouter from "./routers/contact.js";
app.use(contactRouter.router);


// Endpoints
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

app.get("/admin/dashboard", isAuthorized, (req, res) => {
    res.send(dashboardPage);
});

app.get("/admin/dashboard/addproject", isAuthorized, (req, res) => {
    res.send(addProjectPage);
});

app.get("/admin/dashboard/editproject/:id", isAuthorized, (req, res) => {
    const editProjectPage = createPage("editProject/editProject.html", {projectId: req.params.id});
    res.send(editProjectPage);
});

app.get("/admin", (req, res) => {
    if(req.session.isAuthorized) return res.redirect("/admin/dashboard");
    res.send(loginPage);
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});