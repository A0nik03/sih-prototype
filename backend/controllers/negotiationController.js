import Negotiation from '../models/negotiationModel.js';
import Chat from '../models/chatModel.js'; 

export const getNegotiationDetails = async (req, res) => {
  const { itemId } = req.params;

  try {
    const negotiation = await Negotiation.findOne({ itemId });

    if (!negotiation) {
      return res.status(404).json({ message: 'Negotiation details not found' });
    }

    res.status(200).json(negotiation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching negotiation details', error: error.message });
  }
};

export const submitProposal = async (req, res) => {
  const { itemId, proposedPrice } = req.body;

  if (proposedPrice == null || proposedPrice <= 0) {
    return res.status(400).json({ message: 'Valid proposed price is required' });
  }

  try {
    const negotiation = await Negotiation.findOneAndUpdate(
      { itemId },
      { proposedPrice },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Proposal submitted successfully', negotiation });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting proposal', error: error.message });
  }
};

export const sendMessage = async (req, res) => {
  const { itemId, message, sender, senderId, senderName } = req.body;

  console.log('Received request body for sendMessage:', req.body);

  if (!itemId || !message || !sender || !senderId || !senderName) {
    return res.status(400).json({ message: 'Item ID, message, sender, senderId, and senderName are required' });
  }

  try {
    const chat = new Chat({
      itemId,
      message,
      sender,
      senderId,
      senderName
    });
    await chat.save();
    res.status(201).json({ message: 'Message sent successfully', chat });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Chat.find({}).sort({ timestamp: -1 }).limit(10);

    if (messages.length === 0) {
      return res.status(404).json({ message: 'No messages found' });
    }

    const formattedMessages = messages.map(msg => ({
      _id: msg._id,
      senderName: msg.senderName,
      message: msg.message,
      timestamp: msg.timestamp,
      image: msg.image || null,
      read: msg.read || false
    }));

    res.status(200).json(formattedMessages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error: error.message });
  }
};






export const updateProposalStatus = async (req, res) => {
  const { itemId, status } = req.body;

  if (!itemId || !status || !['Pending', 'Accepted', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Valid Item ID and status are required' });
  }

  try {
    const negotiation = await Negotiation.findOneAndUpdate(
      { itemId },
      { status },
      { new: true }
    );

    if (!negotiation) {
      return res.status(404).json({ message: 'Negotiation not found' });
    }

    res.status(200).json({ message: 'Proposal status updated', negotiation });
  } catch (error) {
    res.status(500).json({ message: 'Error updating proposal status', error: error.message });
  }
};
