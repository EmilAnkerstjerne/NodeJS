const express = require("express");
const app = express();

app.use(express.json());

const dankMemes = [
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
// console.log(dankmemes.dankmemes[0]);

app.get("/dankmemes", (req, res) => {
    res.send({memes: dankMemes});
});

app.get("/dankmemes/:id", (req, res) => {
    dankMemes.forEach(meme => {
        if (meme.id === parseInt(req.params.id)){
            return res.send(meme);
        }
    });
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
            }else if(req.body.topText !== null){
                toBeUpdated.topText = req.body.topText;
            }else if(req.body.bottomText !== null){
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

app.post("/dankmemes", (req, res) => {
    let alreadyExists = false;
    dankMemes.forEach(meme => {
        if (meme.id === req.body.id){
            alreadyExists = true;
        }    
    });
    if(!alreadyExists){
        dankMemes.push(req.body);
        res.sendStatus(201);
    }else{
        res.sendStatus(403);
    }
});


app.delete("/dankmemes/:id", (req, res) => {
    let deleted = false;
    dankMemes.forEach(meme => {
        if (meme.id === parseInt(req.params.id)){
            dankMemes.splice(dankMemes.indexOf(meme), 1);
            deleted = true;
        }
    });
    if(deleted){
        return res.sendStatus(200);
    }else{
        return res.sendStatus(404);
    }
});




app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("The server is running on port", 8080);
});