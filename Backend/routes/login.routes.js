const loginRouter = require("express").Router();
const { loginUser } = require("../controller/login.controller");

loginRouter.post("/login", loginUser);

module.exports = loginRouter;
