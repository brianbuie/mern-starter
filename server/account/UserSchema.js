const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true
  },
  displayName: {
    type: String
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

userSchema.plugin(passportLocalMongoose, { usernameLowerCase: true });

module.exports = mongoose.model('User', userSchema);
