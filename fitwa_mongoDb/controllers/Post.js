const postModel = require("../models/Post");
const createPost = async (req, res) => {
    const {title, postDescription, gymName} = req.body;
    console.log(req.body)
    try{

        if (!title || !postDescription) return res.status(400).json("All field are required")

        let post = new postModel({title, postDescription, gymName});
        post.save();

        res.status(200).json(post);
        console.log(post);

    }catch(err){

        console.log(err);
        res.status(500).json(err);

    }
}

const usersPost = async (req, res) => {
    try{

        const listOfPosts = await postModel.find().sort({"createdAt": -1});
        res.status(200).json(listOfPosts);

    }catch(err){

        console.log(err);
        res.status(500).json(err);
    
    }
}

module.exports = {createPost, usersPost};