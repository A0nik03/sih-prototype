import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    address: { type: String },
    crops: { type: [String] },
    location: { type: String },
    profilePicture: { type: String },
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
