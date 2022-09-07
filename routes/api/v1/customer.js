const express = require("express");
const router = express.Router();
const customerApi = require("../../../controllers/api/v1/customer_api");

router.get("/", customerApi.index);
router.post("/create", customerApi.createCustomer);

module.exports = router;
