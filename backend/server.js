const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const paymentRoutes = require('./routes/payment');
app.use('/api/payments', paymentRoutes);

// Webhook
const webhookRoutes = require('./routes/webhook');
app.use('/api/webhooks', webhookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
