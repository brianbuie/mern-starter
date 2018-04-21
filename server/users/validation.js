const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const User = mongoose.model('User');

const username = [
  sanitizeBody('username').trim(),
  body('username')
    .isLength({ min: 3, max: 15 })
    .withMessage('Usernames must be 3 to 15 characters'),
  body('username')
    .custom(username => /^[a-zA-Z0-9-_]+$/g.test(username))
    .withMessage('Usernames can only container letters, numbers, dashes, and underscores')
];

const uniqueUsername = [
  body('username')
    .custom(async username => {
      const taken = await User.findOne({ username: username.toLowerCase() });
      return !taken;
    })
    .withMessage('That username is taken')
];

const email = [
  sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  }),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid e-mail')
];

const emailExists = [
  body('email')
    .custom(async email => {
      const valid = await User.findOne({ email });
      return !!valid;
    })
    .withMessage('No user found with that e-mail address')
];

const newPassword = [
  body('password')
    .isLength({ min: 1 })
    .withMessage('Please provide a password'),
  body('confirm-password')
    .isLength({ min: 1 })
    .withMessage('Please confirm your password'),
  body('confirm-password')
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords don't match")
];

const token = [
  sanitizeBody('token'),
  body('token')
    .custom(async token => {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
      });
      return !!user;
    })
    .withMessage('Password reset is invalid or has expired')
];

exports.register = username
  .concat(uniqueUsername)
  .concat(email)
  .concat(newPassword);

exports.forgotPassword = email.concat(emailExists);

exports.resetToken = token;

exports.updatePassword = token.concat(newPassword);

exports.results = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  next();
};

exports.send = (req, res, next) => {
  res.send();
};
