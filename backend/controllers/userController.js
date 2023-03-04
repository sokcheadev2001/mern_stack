const jwt = require("jsonwebtoken"); // using jwt
const bcrypt = require("bcryptjs"); // using password hash
const asyncHandler = require("express-async-handler"); // async handler exception
const User = require("../models/userModel"); //  user model
// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all field");
  }
  res.json({ message: "Register User" });
};

// @desc    Authentication user
// @route   POST /api/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc    Get user data
// @route   POST /api/user/me
// @access  Private
const getUser = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
