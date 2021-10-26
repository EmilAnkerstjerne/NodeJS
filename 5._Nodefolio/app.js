const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/cv", (req, res) => {
    res.sendFile(__dirname + "/public/cv/cv.html");
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects/projects.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact/contact.html");
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});