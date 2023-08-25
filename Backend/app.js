const express = require("express");
const cors = require("cors");
const app = express();


const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");
const logoutRouter = require("./routes/logout.routes");
const commentRouter = require("./routes/comment.routes");
const allComment =require("./routes/allComment.routes")





app.use(express.json()) 
app.use(cors())
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get("/", (req, res) => res.send({ message: "hello" }));

app.use("/",loginRouter)
app.use("/", registerRouter); 

app.use("/", logoutRouter);
app.use("/",allComment)




module.exports = app;
