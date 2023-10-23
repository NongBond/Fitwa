const express = require("express");
const router = express.Router();
const {transferData, findUser, findUserViaFirebase, getUsers} = require("../controllers/User");

router.get("/", getUsers)
router.get("/users", transferData);
router.get("/find/:userId", findUserViaFirebase);
router.get("/find/mongo/:userId", findUser);

module.exports = router;