import express from 'express';
import multer from 'multer';
import { loginUser, registerUser, getUserRole } from '../controllers/userController.js';

const userRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profilePictures'); // Ensure this path is correctly handled in your server setup
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

userRouter.post("/register", upload.single('profilePicture'), registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/role", getUserRole);

export default userRouter;
