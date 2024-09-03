import userModel from "../models/userModel.js";

// Add to user cart
const addToCart = async (req, res) => {
    try {
        // Fetch user data
        let userData = await userModel.findById(req.body.userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // Add item to cart
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        // Update user cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

// Remove from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        // Update user cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
        res.json({ success: true, message: "Removed From Cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

// Get user cart
const getCart = async (req, res) => {
    try {
        // Fetch user data
        let userData = await userModel.findById(req.body.userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Get cart data
        let cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

export { addToCart, removeFromCart, getCart }
