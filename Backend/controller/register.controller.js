const { createUser, emailExists } = require("../models/register.model");
const { JWT_SECRET } = require("../utils/config");
const jwt = require("jsonwebtoken");

// encrypting password
async function registerUser(req, res) {
  const user = req.body;

  //check valid input
  if (
    !user || 
    !user.f_name ||
    !user.l_name ||
    !user.numberPhone ||
    !user.email ||
    !user.date ||
    !user.matricule ||
    !user.post ||
    !user.sexe||
    !user.password

  ) {
    return res
      .status(403)
      .json({ message: "Veuillez remplir tous les champs" });
  }
  //check for unique phoneNumber
  let email = await emailExists(user.email);

  if (email.length > 0) {
    return res.status(403).send({ message: "username is taken" });
  }

  //creating user
  let userData;
  try {
    userData = await createUser(user);
    console.log(userData)
  } catch (error) {
    console.log("error creating user", error);
  }

  return res.status(200).json({ messgae: "l'ajout valide" });
}
module.exports = {
  registerUser,
};
