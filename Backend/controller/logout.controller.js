function logoutUser(req, res) {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "successfully logged out" });
}
module.exports = {
  logoutUser,
};
