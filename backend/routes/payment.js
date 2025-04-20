const express = require('express');
const router = express.Router();
const { createPaymentIntent } = require('../controllers/paymentsController');

router.post('/pay', createPaymentIntent);

module.exports = router;
