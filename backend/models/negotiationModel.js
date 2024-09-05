import mongoose from 'mongoose';

const negotiationSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    index: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  proposedPrice: {
    type: Number,
    default: null, 
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
  discount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Negotiation = mongoose.model('Negotiation', negotiationSchema);

export default Negotiation;
