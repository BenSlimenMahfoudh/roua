const registerRouter = require('express').Router() ; 
const { userExist } = require('../middleware/authenticate');
const {registerUser} = require('../controller/register.controller');

registerRouter.post('/signup' ,registerUser);

module.exports = registerRouter ;
 