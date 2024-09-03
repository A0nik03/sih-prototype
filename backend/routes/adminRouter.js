import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/admins', async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' });
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
