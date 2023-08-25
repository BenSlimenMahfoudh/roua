const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config.js");
const { searchByEmail } = require("../models/login.model");

async function loginUser(req, res) {
  if (!req.body.email)
    return res
      .status(400)
      .json({ message: "Veuillez remplir tous les champs" });

  // get user from database
  const dbUser = await searchByEmail(req.body.email);

  // check password
  if (!dbUser?.email)
    return res.status(400).json({ "message : ": "wrong email" });
 
  if(dbUser.password!==req.body.password){
    return res.status(400).json({ "message : ": "wrong Password" });
  }
  // sign jwt
  let id = dbUser._id.toString();
  const user = {
    f_name:dbUser.f_name,l_name:dbUser.l_name,
    email:dbUser.email,sexe:dbUser.sexe,
    matricule:dbUser.matricule,post:dbUser.post,
    numberPhone:dbUser.numberPhone,date:dbUser.date
  }
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });

  return res
    .status(200)
    .cookie("access_token", token, { maxAge: 1000 * 60 * 15 })
    .json({ message: "login success", token: token,user:user });
}
module.exports = {
  loginUser,
};
