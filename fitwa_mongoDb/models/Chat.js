const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    members: {
        type: Array, require: true
    }
},{
    timestamps: true
}) 

const chatModel = mongoose.model("chats", chatSchema);

module.exports = chatModel;