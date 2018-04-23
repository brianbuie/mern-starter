const { promisify } = require('es6-promisify');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({ mongooseConnection: mongoose.connection });

const api = express.Router();

require('./UserSchema');
const User = mongoose.model('User');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

api.use((req, res, next) => {
  req.login = promisify(req.login);
  next();
});

const account = require('./accountController');
const validate = require('./accountValidation');
api.get('/account', account.getUser);
api.post('/account/login', account.login);
api.post('/account/logout', account.logout);
api.post('/account/register', validate.register, validate.results, account.register, account.login);
api.post('/account/forgot-password', validate.forgotPassword, validate.results, account.createResetToken);
api.post('/account/validate-token', validate.resetToken, validate.results, validate.send);
api.post('/account/reset-password', validate.updatePassword, validate.results, account.updatePassword);

module.exports = api;
