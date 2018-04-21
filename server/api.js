const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
  res.json({ message: 'hello from express!' });
});

api.use(require('./errors'));

module.exports = api;
