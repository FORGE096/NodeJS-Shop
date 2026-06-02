const express = require('express');
const router = express.Router();
const userController = require("../../controllers/users/user_controller");

router.get("/", userController.buyProduct);
router.get("/profile", userController.updateUser);

module.exports = router;