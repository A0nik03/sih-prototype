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
  const { cartItems, food_list,userId } = useContext(StoreContext);
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

  useEffect(() => {
    if (selectedItem) {
      const fetchMessages = async () => {
        try {
          const response = await axios.get(`${apiUrl}/negotiation/messages`, {
            params: { itemId: selectedItem._id }
          });
          setMessages(response.data);
        } catch (err) {
          console.error('Error fetching messages:', err);
        }
      };

      fetchMessages();
    }
  }, [selectedItem]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setCurrentPrice(item.price);
  };

  const handleSubmitProposal = async () => {
    if (selectedItem && proposedPrice) {
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
        alert('Failed to submit proposal. Please try again later.');
      }
    } else {
      alert('Please select an item and enter a proposed price.');
    }
  };

  const handleSendChatMessage = async () => {
    if (selectedItem && chatMessage) {
      try {
        const sender = 'Consumer';
        const response = await axios.post(`${apiUrl}/negotiation/messages`, {
          itemId: selectedItem._id,
          message: chatMessage,
          sender: sender,
          senderId:userId,
          senderName:"default"
        });
        const newMessage = { text: `You: ${chatMessage}`, type: "outgoing" };
        setMessages([...messages, newMessage]);
        setChatMessage("");
      } catch (err) {
        console.error('Error sending chat message:', err.response ? err.response.data : err.message);
        alert('Failed to send message. Please try again later.');
      }
    } else {
      alert('Please select an item and enter a chat message.');
    }
  };

  const filteredItems = food_list.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      cartItems[item._id] > 0
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, backgroundColor: "#F0F5EB", padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: "#3E7D10" }}>
        Price Negotiation
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, backgroundColor: "#ffffff", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2, color: "#2E5C00" }}>
          Listed Items
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search items..."
          sx={{ marginBottom: 2, backgroundColor: "#F5EDED" }}
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
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ListItem
                  key={item._id}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: selectedItem?._id === item._id ? "#E0FFDA" : "#ffffff",
                    "&:hover": { backgroundColor: "#ECFFED" },
                    marginBottom: 1,
                    borderRadius: 2,
                  }}
                  onClick={() => handleSelectItem(item)}
                >
                  <ShoppingCartIcon sx={{ color: "#4CAF50", marginRight: 2 }} />
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${cartItems[item._id]} | Price: Rs ${item.price} per ${item.unit}`}
                    sx={{ color: "#2E5C00" }}
                  />
                </ListItem>
              ))
            ) : (
              <Typography variant="body1" sx={{ padding: 2, textAlign: "center" }}>
                No items found.
              </Typography>
            )}
          </List>
        </Box>
      </Paper>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3} sx={{ marginBottom: 3 }}>
        <Paper elevation={3} sx={{ padding: 3, flex: 1, backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#2E5C00" }}>
            Negotiation Details
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#2E5C00" }}>
            {selectedItem ? `Negotiating for: ${selectedItem.name}` : "No item selected"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
              marginBottom: 2,
              backgroundColor: "#F0F5EB",
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" sx={{ marginRight: 2, color: "#2E5C00" }}>
              Current Price:
            </Typography>
            <TextField
              variant="outlined"
              value={selectedItem ? `Rs ${currentPrice} per ${selectedItem.unit}` : 'N/A'}
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
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
            onClick={handleSubmitProposal}
          >
            Submit Proposal
          </Button>
        </Paper>
        <Paper elevation={3} sx={{ padding: 3, flex: 1, backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#2E5C00" }}>
            Chat
          </Typography>
          <Box
            sx={{
              maxHeight: 300,
              overflowY: "auto",
              marginBottom: 2,
              padding: 2,
              backgroundColor: "#F9F9F9",
              borderRadius: 2,
            }}
          >
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    textAlign: message.type === "outgoing" ? "right" : "left",
                    marginBottom: 1,
                    color: message.type === "outgoing" ? "#4CAF50" : "#333",
                  }}
                >
                  {message.text}
                </Typography>
              ))
            ) : (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No messages yet.
              </Typography>
            )}
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label="Chat Message"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
            onClick={handleSendChatMessage}
          >
            Send Message
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default NegotiationWindow;
