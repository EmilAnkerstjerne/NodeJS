const express = require("express");
const app = express();

app.use(express.static("public"));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/terminal", (req, res) => {
    res.sendFile(__dirname + "/public/html/terminal.html");
});

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/public/html/express.html");
});

app.get("/git", (req, res) => {
    res.sendFile(__dirname + "/public/html/git.html");
});

app.get("/nodejs", (req, res) => {
    res.sendFile(__dirname + "/public/html/nodejs.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
    console.log("Server is running on port ", PORT);
});