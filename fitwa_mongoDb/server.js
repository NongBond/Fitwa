const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const admin = require("firebase-admin");
//const serviceAccount = require("../firebase/fitwa-197c5-firebase-adminsdk-p74f5-ed54d829ee.json");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routers/User");
const postRoute = require("./routers/Post");
const chatRoute = require("./routers/Chat");
const messageRoute = require("./routers/Message");

const PORT = process.env.PORT || 6969;
const URI = process.env.ATLAS_URI;

app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/main", postRoute);
app.use("/chats", chatRoute);
app.use("/messages", messageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log(`Something went wrong: ${err.message}`);
  });
