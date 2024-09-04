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

        // Add item to cart or increment quantity
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = {
                quantity: 1,
                itemDetails: req.body.itemDetails  // Assuming item details are passed in the request body
            };
        } else {
            cartData[req.body.itemId].quantity += 1;
        }

        // Update user cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding to cart" });
    }
}

// Remove from user cart
const removeFromCart = async (req, res) => {
    try {
        // Fetch user data
        let userData = await userModel.findById(req.body.userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // Decrement item quantity or remove item from cart
        if (cartData[req.body.itemId]) {
            if (cartData[req.body.itemId].quantity > 1) {
                cartData[req.body.itemId].quantity -= 1;
            } else {
                delete cartData[req.body.itemId];
            }
        } else {
            return res.status(400).json({ success: false, message: "Item not in cart" });
        }

        // Update user cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
        res.json({ success: true, message: "Removed from Cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing from cart" });
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
        res.status(500).json({ success: false, message: "Error fetching cart" });
    }
}

export { addToCart, removeFromCart, getCart };
