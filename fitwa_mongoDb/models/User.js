const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String, required: true 
    },
    surname:{
        type: String, required: true
    },
    age: {
        type: String, required: true
    },
    email:{
        type: String, require: true
    },
    sex:{
        type: String, require: true
    },
    userId:{
        type: String, require: true
    }
},{
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;