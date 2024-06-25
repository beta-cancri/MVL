const { Router } = require('express');
const axios = require('axios');

const router = Router();
const DB_KEY = process.env.DB_KEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/platforms?key=${DB_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching platforms:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
