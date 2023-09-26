const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routers/User");
const postRoute = require("./routers/Post");

const PORT = process.env.PORT || 6969;
const URI = process.env.ATLAS_URI;

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/main", postRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongoDB connected");
}).catch((err) => {
    console.log(`Something went wrong: ${err.message}`);
})