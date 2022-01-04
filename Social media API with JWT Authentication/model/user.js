const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('crypto');

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
    validate: {
      validator: function (passwordConfirm) {
        return passwordConfirm === this.password;
      },
    },
  },
});
