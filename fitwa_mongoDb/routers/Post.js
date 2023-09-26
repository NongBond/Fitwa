const express = require("express");
const router = express.Router();
const { createPost, usersPost } = require("../controllers/Post");

router.get("/post", usersPost);
router.post("/create", createPost);

module.exports = router;