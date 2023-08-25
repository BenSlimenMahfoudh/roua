
const {createComment} =require("../models/comment.model");
async function commentController(req, res) {
  console.log(req.userID)
  var dataComment=req.body
  dataComment["userId"]=req.userID
  try {
    const comment =await createComment(dataComment);
    console.log(comment)  
    res.status(200).json({ message: "Secc"});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}
module.exports = {
  commentController,
};
