import express from 'express';
import { reverseGeocode } from '../controllers/geocodeController.js';

const router = express.Router();

router.post('/geocode', reverseGeocode);

export default router;