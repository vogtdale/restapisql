const app = require("express").Router()
const { getAllUsers, getUserbyId, createUser, deleteUser} = require("../contollers/userController")

app.get("/users", getAllUsers)
app.get("/users/:id", getUserbyId)
app.post("/users", createUser)
app.delete("/users/:id", deleteUser)
module.exports = app