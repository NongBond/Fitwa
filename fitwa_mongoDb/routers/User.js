const express = require("express");
const router = express.Router();
const {transferData} = require("../controllers/User")


router.get("/users", transferData)

module.exports = router;