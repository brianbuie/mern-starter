const { promisify } = require('es6-promisify');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({ mongooseConnection: mongoose.connection });

const auth = express.Router();

require('./UserSchema');
const User = mongoose.model('User');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

auth.use(
  session({
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
  })
);
auth.use(passport.initialize());
auth.use(passport.session());

auth.use((req, res, next) => {
  req.login = promisify(req.login);
  next();
});

auth.use('/api/auth', require('./authRouter'));

module.exports = auth;
