import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './farmer.css';

const NegotiationProposal = ({ proposalId, onClose }) => {
  const [proposal, setProposal] = useState({
    product: "",
    quantity: 0,
    currentPrice: 0,
    proposedPrice: 0,
    messages: [],
    status: ""
  });
  const [status, setStatus] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/negotiation/proposal/${proposalId}`);
        setProposal(response.data);
      } catch (error) {
        console.error('Error fetching proposal:', error.response?.data || error.message);
      }
    };

    fetchProposal();
  }, [proposalId]);

  const handleAccept = async () => {
    try {
      await axios.post('http://localhost:4000/api/negotiation/proposal', {
        itemId: proposal._id,
        proposedPrice: proposal.proposedPrice - discount
      });
      setStatus(`Accepted with a discount of ₹${discount}`);
      onClose();
    } catch (error) {
      console.error('Error submitting proposal:', error.response?.data || error.message);
    }
  };

  const handleReject = async () => {
    try {
      await axios.post('http://localhost:4000/api/negotiation/updateStatus', {
        itemId: proposal._id,
        status: 'rejected'
      });
      setStatus('Rejected');
      onClose();
    } catch (error) {
      console.error('Error rejecting proposal:', error.response?.data || error.message);
    }
  };

  const handleNextProposal = async () => {
    try {
      await axios.post('http://localhost:4000/api/negotiation/updateStatus', {
        itemId: proposal._id,
        status: 'pending'
      });

      onClose();
    } catch (error) {
      console.error('Error updating proposal status:', error.response?.data || error.message);
    }
  };

  return (
    <div className="negotiation-panel">
      <h2>Negotiation Proposal</h2>
      <p><strong>Product:</strong> {proposal.product}</p>
      <p><strong>Quantity:</strong> {proposal.quantity}</p>
      <p><strong>Current Price:</strong> ₹{proposal.currentPrice}</p>
      <p><strong>Proposed Price:</strong> ₹{proposal.proposedPrice}</p>
      <p><strong>Status:</strong> {proposal.status}</p>
      <div className="discount-section">
        <label htmlFor="discount">Discount (in rupees):</label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </div>
      <div className="buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
        <button onClick={handleNextProposal}>Next Proposal</button>
      </div>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default NegotiationProposal;
