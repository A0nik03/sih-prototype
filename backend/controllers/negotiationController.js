import Negotiation from '../models/negotiationModel.js';
import Chat from '../models/chatModel.js'; 


export const getNegotiationDetails = async (req, res) => {
  const { itemId } = req.params;

  try {
    const negotiation = await Negotiation.findOne({ itemId });
    if (negotiation) {
      res.json(negotiation);
    } else {
      res.status(404).json({ message: 'Negotiation details not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const submitProposal = async (req, res) => {
  const { itemId, proposedPrice } = req.body;

  try {
    const negotiation = await Negotiation.findOneAndUpdate(
      { itemId },
      { $set: { proposedPrice } },
      { new: true, upsert: true }
    );
    res.json({ message: 'Proposal submitted successfully', negotiation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  const { itemId, message, sender } = req.body;

  try {
    const chat = new Chat({ itemId, message, sender });
    await chat.save();
    res.json({ message: 'Message sent successfully', chat });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProposalStatus = async (req, res) => {
  const { itemId, status } = req.body;

  try {
    const negotiation = await Negotiation.findOneAndUpdate(
      { itemId },
      { $set: { status } },
      { new: true }
    );
    if (negotiation) {
      res.json(negotiation);
    } else {
      res.status(404).json({ message: 'Negotiation not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
