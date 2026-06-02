const express = require("express");
const router = express.Router();
const rootController = require("../../controllers/root/root_controller.js");

router.get("/", rootController.getRootRouter);

module.exports = router;