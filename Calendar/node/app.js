const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())


app.get("/time", (req, res) => {
    const date = new Date();
    res.send({ time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`})
    
})

app.get("/day", (req, res) => {
    const date = new Date();
    res.send({ day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)});
})

app.get("/month", (req, res) => {
    const date = new Date();
    res.send({ month: new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)});
})



app.listen(8080);