const express = require('express');
const router = express.Router();
const fs = require('fs');
const productsControllers = require("../../controllers/productsControllers")

router.get("/getbyid/:id", productsControllers.getProduct)

router.post("/add", productsControllers.addProduct)

module.exports = router