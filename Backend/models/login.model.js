const User = require("./register.mongo");

async function searchByEmail(emailUser) {
  return await User.findOne({ email: emailUser });
}
module.exports = {
  searchByEmail,
};
