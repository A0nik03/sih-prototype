import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    index: true,
  },
  message: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
  },
  senderName: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
