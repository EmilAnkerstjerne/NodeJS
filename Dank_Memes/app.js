const express = require("express");
const app = express();

const dankmemes = require("./dankmemes.json");

// let dankmemes = [
//     {
//         navn: "Rick Astley",
//         id: 1
//     },
//     {
//         navn: "Stonks",
//         id: 2
//     },
//     {
//         navn: "Mike Warzowski",
//         id: 3
//     },
// ]
console.log(dankmemes.dankmemes[0]);

app.get("/dankmemes", (req, res) => {
    res.send(dankmemes);
})

app.get("/dankmemes/:id", (req, res) => {
    // res.send(dankmemes.find(dankmeme => dankmeme.id === parseInt(req.params.id)));

    for (let i = 0; i < dankmemes.dankmemes.length; i++){
        if(dankmemes.dankmemes[i].id === parseInt(req.params.id)){
            return res.send(dankmemes.dankmemes[i]);
        }
    }
    res.send("fejl")
});




app.listen(8080);