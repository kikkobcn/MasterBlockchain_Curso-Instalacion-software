const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/hora", (req, res) => {    //añadir al localhost:3000  añadir  /hora
    res.send(new Date())
})

app.listen(3000, () => {
    console.log("puerto 3000")
})