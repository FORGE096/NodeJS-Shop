const express = require('express');
const router = express.Router();
const userController = require("../../controllers/shop/shop_controller.js");

router.get("/", userController.buyProduct);

module.exports = router;