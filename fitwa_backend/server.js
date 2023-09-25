const express = require("express");
const app = express();

const PORT = 6969
const db = require("./models")
const postRouter = require("./routers/Posts")

app.use(express.json());
app.use("/posts", postRouter);


db.sequelize.sync().then(app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})).catch(err => {
    console.log(`${err} is occured`);
})
