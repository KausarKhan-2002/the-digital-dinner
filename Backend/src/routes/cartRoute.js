const express = require('express')
const { isAuthorized } = require('../middlewares/isAuthorized')
const { addItem, getItem, updateQuantity, deleteItem } = require('../controllers/cartController')
const route = express.Router()

route.post("/add", isAuthorized, addItem)
route.get("/get", isAuthorized, getItem)
route.put("/update-quantity", isAuthorized, updateQuantity)
route.put("/delete", isAuthorized, deleteItem)

module.exports = {cartRoute: route}