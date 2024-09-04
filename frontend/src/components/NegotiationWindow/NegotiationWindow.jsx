import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const apiUrl = 'http://localhost:4000/api'; 

const NegotiationWindow = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(location.state?.itemToNegotiate || null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [proposedPrice, setProposedPrice] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setCurrentPrice(selectedItem.price);
    }
  }, [selectedItem]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setCurrentPrice(item.price);
  };

  const handleSubmitProposal = async () => {
    if (proposedPrice) {
      try {
        const response = await axios.post(`${apiUrl}/negotiation/proposal`, {
          itemId: selectedItem._id,
          proposedPrice: proposedPrice,
        });
        const newMessage = {
          text: `Retailer proposed: Rs ${proposedPrice} per ${selectedItem.unit}`,
          type: "outgoing",
        };
        setMessages([...messages, newMessage]);
        setProposedPrice("");
      } catch (err) {
        console.error('Error submitting proposal:', err);
      }
    }
  };

  const handleSendChatMessage = async () => {
    if (chatMessage) {
      try {
        const sender = 'Consumer';
        const response = await axios.post('http://localhost:4000/api/negotiation/message', {
          itemId: selectedItem._id,
          message: chatMessage,
          sender: sender,
        });
        const newMessage = { text: `You: ${chatMessage}`, type: "outgoing" };
        setMessages([...messages, newMessage]);
        setChatMessage("");
      } catch (err) {
        console.error('Error sending chat message:', err.response ? err.response.data : err.message);
        alert('Failed to send message. Please try again later.');
      }
    }
  };
  

  const filteredItems = food_list.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      cartItems[item._id] > 0
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, backgroundColor: "#f7f7f7", padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: "#4a4a4a" }}>
        Price Negotiation
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, backgroundColor: "#ffffff", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2, color: "#333" }}>
          Listed Items
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search items..."
          sx={{ marginBottom: 2, backgroundColor: "#f0f0f0" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
          <List>
            {filteredItems.map((item) => (
              <ListItem
                key={item._id}
                sx={{
                  cursor: "pointer",
                  backgroundColor: selectedItem?._id === item._id ? "#e3f2fd" : "#ffffff",
                  "&:hover": { backgroundColor: "#e1f5fe" },
                  marginBottom: 1,
                  borderRadius: 2,
                }}
                onClick={() => handleSelectItem(item)}
              >
                <ShoppingCartIcon sx={{ color: "#4a90e2", marginRight: 2 }} />
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${cartItems[item._id]} | Price: Rs ${item.price} per ${item.unit}`}
                  sx={{ color: "#333" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3} sx={{ marginBottom: 3 }}>
        <Paper elevation={3} sx={{ padding: 3, flex: 1, backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
            Negotiation Details
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#333" }}>
            {selectedItem ? `Negotiating for: ${selectedItem.name}` : "No item selected"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
              marginBottom: 2,
              backgroundColor: "#f0f0f0",
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" sx={{ marginRight: 2, color: "#333" }}>
              Current Price:
            </Typography>
            <TextField
              variant="outlined"
              value={`Rs ${currentPrice} per ${selectedItem?.unit}`}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <MonetizationOnIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ flex: 1, backgroundColor: "#ffffff" }}
            />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label="Proposed Price"
            type="number"
            value={proposedPrice}
            onChange={(e) => setProposedPrice(e.target.value)}
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmitProposal}>
            Submit Proposal
          </Button>
        </Paper>
        <Paper elevation={3} sx={{ padding: 3, flex: 1, backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
            Chat
          </Typography>
          <Box
            sx={{
              maxHeight: 300,
              overflowY: "auto",
              marginBottom: 2,
              padding: 2,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
            }}
          >
            {messages.map((message, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  textAlign: message.type === "outgoing" ? "right" : "left",
                  marginBottom: 1,
                  color: message.type === "outgoing" ? "#4a90e2" : "#333",
                }}
              >
                {message.text}
              </Typography>
            ))}
          </Box>
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              sx={{ marginRight: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSendChatMessage}>
              Send
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default NegotiationWindow;
