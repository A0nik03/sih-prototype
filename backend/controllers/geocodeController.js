import axios from 'axios';

const API_KEY = 'ffb9be21fc724728b83480a93ec9c48c';
const GEOCODE_URL = 'https://api.opencagedata.com/geocode/v1/json';

export const reverseGeocode = async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ success: false, message: 'Latitude and longitude are required.' });
  }

  try {
    const response = await axios.get(GEOCODE_URL, {
      params: {
        q: `${latitude},${longitude}`,
        key: API_KEY,
      },
    });

    // Check if there are results and if the formatted address exists
    const address = response.data.results && response.data.results.length > 0
      ? response.data.results[0].formatted
      : "Address not found";

    res.json({ success: true, address });
  } catch (error) {
    console.error('Error during reverse geocoding:', error.message);
    res.status(500).json({ success: false, message: 'An error occurred while fetching the address.' });
  }
};
