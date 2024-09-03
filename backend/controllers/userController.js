import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

// Create token with role
const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("Login attempt:", { email });

        const user = await userModel.findOne({ email });

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log("Invalid credentials");
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id, user.role);
        console.log("Login successful, token generated:", token);

        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


const registerUser = async (req, res) => {
    const { name, email, password, mobile, role, address, crops, location } = req.body;
    const profilePicture = req.file ? req.file.path.replace('uploads/', '') : ''; // Store the relative path

    try {
        // Validate input fields
        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validate email format & password strength
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            mobile,
            role: role || 'customer', // Default role is 'customer'
            address: role === 'admin' ? address : undefined,
            crops: role === 'admin' ? crops : undefined,
            location: role === 'admin' ? location : undefined,
            profilePicture,
        });

        const user = await newUser.save();
        const token = createToken(user._id, user.role);
        res.status(201).json({ success: true, token, role: user.role });

    } catch (error) {
        console.error("Registration error:", error.message || error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message || "Unknown error" });
    }
};


// Get user role
const getUserRole = async (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ success: false, message: "User ID is required" });
    }
    
    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, role: user.role });
    } catch (error) {
        console.error("Error fetching user role:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { loginUser, registerUser, getUserRole };
