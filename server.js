const express = require("express")
const cors = require("cors")
const app = express()
const config = require("./config/config")

app.use(cors())
app.use(express.json())

app.post("/api/test", (req, res) => {
    res.send(
        "HELLO"
    )    
})

app.listen(config.port, "estokk.com" ,() => {
    console.log(`Server is running on ${config.port}`)
})