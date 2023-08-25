const user = require("./register.mongo");

async function createUser(userObj) {
  return await user.create(userObj);
}
async function emailExists(email) {
  return await user.find({ email: email });
}

module.exports = {
  createUser,
emailExists
};
