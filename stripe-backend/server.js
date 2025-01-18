// const express = require('express');
// const Stripe = require('stripe');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const stripe = Stripe('your-secret-key-here'); // Replace with your Stripe secret key

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Create a Payment Intent
// app.post('/create-payment-intent', async (req, res) => {
//   const { amount, currency } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount, // Amount in cents (e.g., $24.99 = 2499)
//       currency: currency || 'usd', // Default to USD if not provided
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock the /create-payment-intent endpoint
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  // Mock response
  res.send({
    clientSecret: 'pi_mock_client_secret_123456', // Simulate a client secret
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});