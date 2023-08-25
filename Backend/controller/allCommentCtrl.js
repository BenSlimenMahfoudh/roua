const {getAllComments } = require("../models/comment.model.js");

async function getAllCommentsCtrl(req, res) {
  const data = await getAllComments();
  if (!data) return res.status(400).json({ message: "no data" });

  return res.status(200).json({ data: data });
}
module.exports = {
  getAllCommentsCtrl,
};
 