import User from "../models/user.js";
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs'
import asyncHandler from '../middleware/asyncHandler.js'
import dotenv from 'dotenv';

dotenv.config();

export const getUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  res.status(200).json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  });
});


export const registerUser = asyncHandler(async (req, res) => {
  
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword)
      return res.status(400).json({ message: 'All fields are required' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already registered try to login' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(500).json({ message: 'User registration failed' });
  }
});

// Login
export const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'User does not exist,please signin' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' });

    generateToken(res,user._id);

    res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
  
  
});

export const logoutUser = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({ message: "Logged out successfully" });
};



export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  
  res.status(200).json({
    message: 'If this email is registered, a password reset link has been sent.',
  });
});