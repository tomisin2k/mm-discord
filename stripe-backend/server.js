require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();

// Initialize Stripe with your test secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend
  methods: ['POST', 'GET'],
  credentials: true,
}));

// Create a Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  console.log("Received request to create Payment Intent:", { amount, currency });

  try {
    // Create a PaymentIntent using the Stripe API (test mode)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents (e.g., $24.99 = 2499)
      currency: currency || 'usd', // Default to USD if not provided
    });

    console.log("Payment Intent created:", paymentIntent);

    // Send the client secret back to the frontend
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating Payment Intent:', error);
    res.status(400).send({
      error: error.message,
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});