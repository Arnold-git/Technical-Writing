const res = require('express/lib/response');
const User = require('./models/userModel');

exports.signUp = async (req, req) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;
  } catch (err) {
    res.status(500).json(err);
  }
};
