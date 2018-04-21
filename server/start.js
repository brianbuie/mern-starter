/*
  Init
*/
require('module-alias/register');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../variables.env') });
const express = require('express');
require('express-async-errors');
const api = express();
api.use(require('helmet')());

/*
  Database
*/
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error);

/*
  Request parsing
*/
const bodyParser = require('body-parser');
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(require('express-query-int')());
api.use(require('express-query-boolean')());

/*
  DevServer
*/
if (api.get('env') === 'development') {
  const proxy = require('proxy-middleware');
  const url = require('url');
  api.use('/dist', proxy(url.parse(`http://localhost:${process.env.WEBPACK_PORT}/dist`)));
}

/*
  Users
*/
api.use(require('@server/users'));

/*
  App
*/
api.use('/api', require('@server/api'));

/*
  Static Files
*/
api.use(express.static(path.resolve(__dirname, '../public')));
api.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

/*
  Listen
*/
api.listen(process.env.PORT, () => console.log(`App available on PORT ${process.env.PORT}`));
