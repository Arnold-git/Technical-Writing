const res = require('express/lib/response');
const User = require('./models/userModel');

exports.signUp = async (req, req) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      passwordConfirm,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
