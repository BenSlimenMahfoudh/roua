const logoutRouter = require('express').Router() ;
const {logoutUser} =require('../controller/logout.controller')

logoutRouter.post('/logout' , logoutUser ) ;

module.exports = logoutRouter ;
