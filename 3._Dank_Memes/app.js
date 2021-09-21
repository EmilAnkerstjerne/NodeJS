const express = require("express");
const app = express();

const dankMemes = [{
    topText: "Mom: We have Javascript at home",
    bottomText: "Javascript at home: Node.js"
}]

app.get("/dankmemes", (req, res) => {
    res.send({memes: dankMemes});
})

app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("The server is running on port", 8080);
});