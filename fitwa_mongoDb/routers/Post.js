const express = require("express");
const router = express.Router();
const { createPost, usersPost } = require("../controllers/Post");

router.get("/", usersPost);
router.post("/", createPost);

module.exports = router;