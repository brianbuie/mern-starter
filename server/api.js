const express = require('express');
const api = express.Router();

api.use(require('@api/account'));

api.get('/', (req, res) => {
  res.json({ message: 'hello from express!' });
});

api.use(require('@api/errors'));

module.exports = api;
