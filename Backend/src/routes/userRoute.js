const express = require("express");
const { signup, login, logout } = require("../controllers/userController");
const { isAuthorized } = require("../middlewares/isAuthorized");
const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", isAuthorized, logout)



module.exports = { userRoute: route };