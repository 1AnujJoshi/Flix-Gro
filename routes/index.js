const express = require("express");

const router = express.Router();

console.log("router loaded");

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Grocery Backend-API",
  });
});

router.use("/api", require("./api"));

module.exports = router;
