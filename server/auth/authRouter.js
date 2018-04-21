const express = require('express');

const auth = express.Router();

auth.post('/login', (req, res, next) => {});

module.exports = auth;
