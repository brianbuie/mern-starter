const passport = require('passport');
const mongoose = require('mongoose');
const crypto = require('crypto');
const { promisify } = require('es6-promisify');
const { pick } = require('lodash');
const email = require('./email');

const User = mongoose.model('User');

exports.getUser = (req, res, next) => {
  res.send(pick(req.user, ['displayName', 'email']));
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: 'Oops, try again' });
    req.logIn(user, err => {
      if (err) return next(err);
      res.send(pick(user, ['displayName', 'email']));
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.json({ message: 'logged out' });
};

exports.register = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username.toLowerCase(),
    displayName: req.body.username
  });
  await user.setPassword(req.body.password);
  await user.save();
  next();
};

exports.createResetToken = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  user.resetPasswordToken = crypto.createHash('md5').digest('hex');
  user.resetPasswordExpires = Date.now() + 3600000;
  await user.save();
  const resetURL = `http://${req.headers.host}/account/reset-password?token=${user.resetPasswordToken}`;
  await email
    .sendPasswordReset({
      user,
      subject: 'Password Reset',
      resetURL
    })
    .catch(console.error);
  return res.json({ message: 'Password reset sent, check your e-mail for the link' });
};

exports.updatePassword = async (req, res) => {
  const user = await User.findOne({ resetPasswordToken: req.body.token });
  user.setPassword = promisify(user.setPassword);
  await user.setPassword(req.body.password);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  const updatedUser = await user.save();
  await req.login(updatedUser);
  res.send(pick(updatedUser, ['displayName', 'email']));
};
