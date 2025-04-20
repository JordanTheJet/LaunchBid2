const axios = require('axios');
const pool = require('../config/db');

const RADIUS_API = 'https://api.radiustech.xyz/v1'; // use sandbox or production based on env

exports.createPaymentIntent = async (req, res) => {
  const { userAddress, amount, token } = req.body;

  try {
    const response = await axios.post(
      `${RADIUS_API}/checkout/create`,
      {
        address: userAddress,
        amount,
        token, // e.g. 'USDC'
        chain: 'arbitrum', // or any supported chain
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RADIUS_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { id: payment_id, status } = response.data;

    // Store in DB
    await pool.query(
      'INSERT INTO transactions (user_address, amount, token, payment_id, status) VALUES ($1, $2, $3, $4, $5)',
      [userAddress, amount, token, payment_id, status]
    );

    res.json({ payment_id, status });
  } catch (error) {
    console.error('Radius error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Payment creation failed' });
  }
};
