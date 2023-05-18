const stripe_secret = '<stripe_secret>';

const publishable_key = '<publishable_key>';

const stripe = require('stripe')(stripe_secret);

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'server is running' });
});

app.get('/get-client-secret', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: 'usd',
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
