const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo/cleo.html")
});

app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom/teenageroom.html");
});

app.get("/creditor", (req, res) => {
    res.send({ message: "You are indebted and you won't get what you want." });
});

app.get("/sausage/:money", (req, res) => {
    req.params.money < 25 ? res.redirect("/creditor") : res.send({ sausage: "Indianer i svøb" }); 
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
    console.log("Server is running on port ", PORT);
});