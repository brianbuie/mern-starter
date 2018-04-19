/*
  Init
*/
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', 'variables.env') });
const express = require('express');
require('express-async-errors');
const api = express();

/*
  Database
*/
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error);

/*
  Users
*/
require('./models/User');
const passport = require('passport');
const User = mongoose.model('User');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*
  Sessions
*/
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({ mongooseConnection: mongoose.connection });
api.use(
  session({
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
  })
);
api.use(passport.initialize());
api.use(passport.session());
const { promisify } = require('es6-promisify');
api.use((req, res, next) => {
  req.login = promisify(req.login);
  next();
});

/*
  Request parsing
*/
const bodyParser = require('body-parser');
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(require('express-query-int')());
api.use(require('express-query-boolean')());
api.use(express.static(path.resolve(__dirname, '..', 'public')));

/*
  App
*/
api.use('/api', require('./api'));

/*
  Listen
*/
api.listen(process.env.PORT, () => console.log(`Server available on port ${process.env.PORT}`));
