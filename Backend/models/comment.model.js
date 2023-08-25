const user= require("./register.mongo")
const comment = require("./comment.mongo")
// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../utils/config");


async function finduserById(iduser) {
    return await user.findById(iduser);
}
async function createComment(dataComment){
    // const token = tokenSend.split(" ")[1]
    // console.log("token function : ",token )
    // if (!token) console.log("errr")

    // const decodedToken = jwt.verify(token, JWT_SECRET);
    // console.log("decoded token", decodedToken);
    // dataComment["UserID"]=decodedToken.id
    // console.log(dataComment)
    return await comment.create(dataComment)
}

async function getAllComments() {

    return await comment.find({});

}

module.exports = {finduserById, createComment,getAllComments};
