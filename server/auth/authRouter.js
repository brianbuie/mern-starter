const express = require('express');
const auth = require('./authController');
const authRouter = express.Router();

authRouter.post('/login', auth.login);
authRouter.post('/logout', auth.logout);
authRouter.post('/register', auth.validateRegister, auth.register, auth.login);

module.exports = authRouter;
