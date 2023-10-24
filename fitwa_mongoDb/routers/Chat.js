const express = require("express");
const { createChat, findUserChats, findChat, deleteChat } = require("../controllers/Chat");
const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.get("/:firstId/:secondId", findChat);
router.delete("delete/:chatId", deleteChat);

module.exports = router;