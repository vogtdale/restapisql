const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
require("./dbconfig")

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get("/", (req,res) => {
    res.status(200).send("App is running...")
})

app.use("/api", require("./routes/api"))

app.use((req,res,next) => {
    res.status(404).type("text").send("Not Found")
})

const server = app.listen(port, () => {
    const host = server.address().address
    console.log(`App is listening at http://${host} on port ${port}`);
})