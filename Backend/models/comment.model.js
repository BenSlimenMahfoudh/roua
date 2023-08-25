const user= require("./register.mongo")
const comment = require("./comment.mongo")

async function finduserById(iduser) {
    return await user.findById(iduser);
}
async function createComment(dataComment){
    return await comment.create(dataComment)
}

async function getAllComments() {
    return await comment.find({});
}

module.exports = {finduserById, createComment,getAllComments};
