import express from 'express';
import {
  getNegotiationDetails,
  submitProposal,
  sendMessage,
  updateProposalStatus
} from '../controllers/negotiationController.js';

const router = express.Router();

router.get('/:itemId', getNegotiationDetails);

router.post('/proposal', submitProposal);

router.post('/message', sendMessage);

router.post('/updateStatus', updateProposalStatus);

export default router;
