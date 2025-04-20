const express = require("express")
const { signup } = require("../controllers/userController")
const route = express.Router()

route.post("/signup", signup)

module.exports = {userRoute: route}