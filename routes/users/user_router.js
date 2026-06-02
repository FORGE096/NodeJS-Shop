const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users/user_controller.js");

router.get("/", userController.testUserRoot);

module.exports = router;
