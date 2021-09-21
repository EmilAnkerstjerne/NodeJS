const express = require("express");
const app = express();

let dankmemes = [
    {
        navn: "Rick Astley",
        id: 1
    },
    {
        navn: "Stonks",
        id: 2
    },
    {
        navn: "Mike Warzowski",
        id: 3
    },
]

app.get("/dankmemes", (req, res) => {
    res.send(dankmemes);
})

app.get("/dankmemes/:id", (req, res) => {
    res.send(dankmemes.find(dankmeme => dankmeme.id === parseInt(req.params.id)));
})




app.listen(8080);