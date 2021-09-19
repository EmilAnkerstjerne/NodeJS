const express = require("express");
const app = express();
// req = request, res = response
app.get("/", (req, res) => {
    res.send({ mindIsBlown: true });
});

app.get("/adventureTime", (req, res) => {
    res.send({ adventure: "Time" });
});

app.get("/senddata", (req, res) => {
    console.log(req.query);
    res.send({ svar: req.query.svar });
});

app.get("/favoriteNumber/:param1", (req, res) => {
    res.send({ 
        number: req.params.param1,
        nice: req.params.param1 === 69 || req.params.param1 === 420});
});


app.listen(3000);
