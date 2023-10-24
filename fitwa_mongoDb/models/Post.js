const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title:{
        type: String, require: true
    },
    postDescription:{
        type: String, require: true
    },
    gymName:{
        type: String, require: true
    },
    poster:{
        type: String, require: true
    }

},{
    timestamps: true
}) 

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;