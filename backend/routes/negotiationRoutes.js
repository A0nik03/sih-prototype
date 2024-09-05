import express from 'express';
import { getNegotiationDetails, submitProposal, sendMessage, getMessages, updateProposalStatus } from '../controllers/negotiationController.js';

const router = express.Router();


router.post('/proposal', submitProposal);
router.post('/messages', sendMessage);
router.get('/messages', getMessages);
router.put('/status', updateProposalStatus);

export default router;
