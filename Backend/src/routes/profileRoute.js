const express = require("express");
const { isAuthorized } = require("../middlewares/isAuthorized");
const { getProfile } = require("../controllers/profileController");
const route = express.Router();

route.get("/", isAuthorized, getProfile)

module.exports = {profileRoute: route}