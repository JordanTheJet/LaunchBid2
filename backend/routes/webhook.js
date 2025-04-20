const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/radius', async (req, res) => {
  const { id: payment_id, status } = req.body;

  try {
    await pool.query(
      'UPDATE transactions SET status = $1 WHERE payment_id = $2',
      [status, payment_id]
    );

    res.status(200).json({ message: 'Transaction updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Webhook processing error' });
  }
});

module.exports = router;
