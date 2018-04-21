const express = require('express');
const account = require('./accountController');
const router = express.Router();

router.post('/login', account.login);
router.post('/logout', account.logout);
router.post('/register', account.validateRegister, account.register, account.login);

module.exports = router;
