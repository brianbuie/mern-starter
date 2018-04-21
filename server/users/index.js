const { promisify } = require('es6-promisify');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({ mongooseConnection: mongoose.connection });

const users = express.Router();

require('./UserSchema');
const User = mongoose.model('User');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

users.use(
  session({
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
  })
);
users.use(passport.initialize());
users.use(passport.session());

users.use((req, res, next) => {
  req.login = promisify(req.login);
  next();
});

const account = require('./account');
const validate = require('./validation');
users.post('/account/login', account.login);
users.post('/account/logout', account.logout);
users.post('/account/register', validate.register, validate.results, account.register, account.login);
users.post('/account/forgot-password', validate.forgotPassword, validate.results, account.createResetToken);
users.post('/account/validate-token', validate.resetToken, validate.results, validate.send);
users.post('/account/reset-password', validate.updatePassword, validate.results, account.updatePassword);

module.exports = users;
