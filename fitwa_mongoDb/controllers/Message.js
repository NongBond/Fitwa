const messageModel = require("../models/Message");

const createMessage = async (req, res) => {
    const {chatId, senderId, text} = req.body;
    try{
        const message = new messageModel({
            chatId, senderId, text
        })
        const response = await message.save();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

}

const getMessages = async (req, res) => {
    const {chatId} = req.params;
    try{
        const messages = await messageModel.find({chatId});
        res.status(200).json(messages);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {createMessage, getMessages};