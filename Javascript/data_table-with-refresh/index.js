const express = require("express");
const chance = require("chance").Chance()
const shuffleArray = require("shuffle-array")

const app = express()

const data = {
    headers: ["Name", "Age", "Profes"]
}

app.get("/data", (req, res) => {
    res.send("Hey dom")
})

app.listen(3000, () => {
    console.log("app is running")
})