const express = require('express')
const { isAuthorized } = require('../middlewares/isAuthorized')
const { addItem, getItem, updateQuantity } = require('../controllers/cartController')
const route = express.Router()

route.post("/add", isAuthorized, addItem)
route.get("/get", isAuthorized, getItem)
route.put("/update-quantity", isAuthorized, updateQuantity)

module.exports = {cartRoute: route}