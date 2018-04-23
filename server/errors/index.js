const express = require('express');
const isDev = process.env.NODE_ENV === 'development';
const api = express.Router();

api.use((err, req, res, next) => {
  console.error(err.stack);
  if (!isDev) return res.status(500).json({ message: 'Something went wrong' });
  res.status(500).json(err);
});

api.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

module.exports = api;
