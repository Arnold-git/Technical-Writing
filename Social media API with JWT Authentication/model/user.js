const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please, tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: [6, 'Password must be atleast 8 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please, confirm your password'],
    validate: {
      validator: function (passwordConfirm) {
        return passwordConfirm === this.password;
      },
      message: 'Password and passwordConfirm must be the same',
    },
    profilePicture: String,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
