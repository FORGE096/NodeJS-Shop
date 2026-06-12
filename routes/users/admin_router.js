const express = require("express");
const router = express.Router();
const admin = require("../../controllers/products/admin");

router.get("/add-product", admin.addProduct);
router.get("/delete-product", admin.deleteProduct);
router.get("/update-product", admin.updateProduct);

module.exports = router;
