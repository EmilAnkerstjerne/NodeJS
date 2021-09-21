const express = require("express");
const app = express();

const dankmemes = require("./dankmemes.json");

// const dankmemes = [
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
// console.log(dankmemes.dankmemes[0]);

app.get("/dankmemes", (req, res) => {
    res.send(dankmemes);
})

app.get("/dankmemes/:id", (req, res) => {
    dankmemes.forEach(meme => {
        if (meme.id === parseInt(req.params.id)){
            return res.send(meme)
        }
    });
});




app.listen(8080);