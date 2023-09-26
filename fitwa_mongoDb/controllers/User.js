const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const createToken = (_id) => {
    const jwtKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtKey, {expiresIn: "3d"});
};

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try{
    
        let user = await userModel.findOne({email});
    
        if(user) return res.status(400).json("The given email already exists");
    
        if(!name || !email || !password) return res.status(400).json("All field are required");
    
        user = new userModel({name, email, password});
    
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    
        await user.save();
    
        const token = createToken(user._id)
    
        res.status(200).json({message: "You have register to Fitwa(stupid frontend dev)", _id: user.id, name, email, token});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        let user = await userModel.findOne({email});
        
        if (!user) return res.status(400).json("This email has not register!!");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) return res.status(400).json("Incorrect password");
    
        const token = createToken(user._id)
        res.status(200).json({message: "Welcome to Fitwa(very stupid frontend dev)", _id: user.id, name: user.name, email, token});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const findUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await userModel.findById(userId);
        res.status(200).json(user)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

const findAllUser = async (req, res) => {
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = { registerUser, loginUser, findUser, findAllUser };