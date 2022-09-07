const express = require("express");

const router = express.Router();
const productApi = require("../../../controllers/api/v1/product_api");

router.get("/", productApi.index);
router.post("/create", productApi.createProduct);
router.put("/:id/updatePrice", productApi.updatePrice);

module.exports = router;
