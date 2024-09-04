import mongoose from 'mongoose';

const negotiationSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  proposedPrice: { type: Number },
  status: { type: String, default: 'Pending' },
  discount: { type: Number, default: 0 }
});

const Negotiation = mongoose.model('Negotiation', negotiationSchema);

export default Negotiation;
