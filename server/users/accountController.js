const passport = require('passport');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const User = mongoose.model('User');

exports.login = (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.status(400).send();
    req.logIn(user, function(err) {
      if (err) return next(err);
      res.send(user);
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.send();
};

exports.validateRegister = [
  sanitizeBody('username').trim(),
  sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  }),
  body('username')
    .isLength({ min: 3, max: 15 })
    .withMessage('Usernames must be 5 to 15 characters'),
  body('username')
    .custom(username => /^[a-zA-Z0-9-_]+$/g.test(username))
    .withMessage('Usernames can only container letters, numbers, dashes, and underscores'),
  body('username')
    .custom(async username => {
      const taken = await User.findOne({ username: username.toLowerCase() });
      return !taken;
    })
    .withMessage('That username is taken'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid e-mail'),
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

exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  const user = new User({
    email: req.body.email,
    username: req.body.username.toLowerCase(),
    displayName: req.body.username
  });
  await user.setPassword(req.body.password);
  await user.save();
  next();
};
