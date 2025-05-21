// routes/userRoutes.js
import express from 'express';
import {
  registerUser,
  loginUser,
  forgotPassword,
  logoutUser,
  getUserProfile
} from '../controllers/userController.js';
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/logout', logoutUser);

export default router;
