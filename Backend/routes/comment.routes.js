const commentRouter = require("express").Router();
const { jwtAuth } = require("../middleware/authenticate.js");
const { commentController } = require("../controller/comment.controller.js");

commentRouter.post("/addComment", jwtAuth, commentController);


module.exports = commentRouter;
