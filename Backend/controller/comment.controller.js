
const {createComment} =require("../models/comment.model");
async function commentController(req, res) {
  // const date= Date.now();
  // const dateV=new Date(date)
  // const dateString= dateV.getDate().toString()+"/"+(dateV.getMonth()+1).toString()+"/"+dateV.getFullYear().toString()
  // const timeString= dateV.getHours().toString()+":"+dateV.getMinutes().toString()+":"+dateV.getSeconds().toString()
  // const data = {
  //   patient_id: req.userID,
  //   date_v: dateString,
  //   time_v: timeString,
  //   oxy: req.body.oxy,
  //   temp: req.body.temp,
  //   tensio: req.body.tensio,
  //   poid: req.body.poid,
  //   size: req.body.size,
  //   cc: req.body.cc,
  //   imc: req.body.imc,
  // };
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
