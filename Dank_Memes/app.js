const express = require("express");
const app = express();

app.use(express.json());


let dankMemes = [
    {
        name: "Rick Astley",
        topText: "Never gonna give you up",
        bottomText: "never gonna let you down",
        id: 1
    },
    {
        name: "Stonks",
        topText: "When you have food at home",
        bottomText: "STONKS",
        id: 2
    },
    {
        name: "We have x at home",
        topText: "Mom: We have JavaScript at home",
        bottomText: "JavaScript at home: NodeJs",
        id: 3
    },
]

let AUTO_INCREMENT = 3;
// console.log(dankmemes.dankmemes[0]);

app.get("/dankmemes", (req, res) => {
    res.send({memes: dankMemes});
});

app.get("/dankmemes/:id", (req, res) => {
    res.send(dankMemes.find(meme => meme.id === Number(req.params.id)));
});

app.post("/dankmemes", (req, res) => {
    const dankMeme = req.body;
    dankMeme.id = ++AUTO_INCREMENT;
    dankMemes.push(dankMeme);
    res.send(req.body);
});

app.put("/dankmemes/:id", (req, res) => {
    let updated = false;
    dankMemes.forEach(meme => {
        if (meme.id === parseInt(req.params.id)){
            dankMemes[dankMemes.indexOf(meme)] = req.body;
            updated = true;
        }
    });
    if(updated){
        res.sendStatus(200);
    }else{
        res.sendStatus(404);
    }
});

app.patch("/dankmemes/:id", (req, res) => {
    let updated = false;
    dankMemes.forEach(meme => {
        if (meme.id === parseInt(req.params.id)){
            let toBeUpdated = dankMemes[dankMemes.indexOf(meme)]
            if(req.body.name !== null){
                toBeUpdated.name = req.body.name;
            }
            if(req.body.topText !== null){
                toBeUpdated.topText = req.body.topText;
            }
            if(req.body.bottomText !== null){
                toBeUpdated.bottomText = req.body.bottomText;
            }
            updated = true;
        }
    });
    if(updated){
        res.sendStatus(200);
    }else{
        res.sendStatus(404);
    }
});


app.delete("/dankmemes/:id", (req, res) => {
    let foundMemeToDelete = false;
    dankMemes = dankMemes.filter(dankMeme => {
        notToDelete = dankMeme.id !== Number(req.params.id);
        if(!notToDelete) foundMemeToDelete = true;
        return notToDelete;
    });
    foundMemeToDelete ? res.sendStatus(200) : res.sendStatus(400);
});




app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("The server is running on port", 8080);
});