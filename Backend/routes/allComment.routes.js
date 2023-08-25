const allComment = require("express").Router();
const { getAllCommentsCtrl } = require("../controller/allCommentCtrl");

allComment.get("/allComment", getAllCommentsCtrl);

module.exports = allComment;
 