const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/paypal/ipn', async (req, res) => {
  const payload = req.body;

  // Validate IPN with PayPal
  const verification = await axios.post('https://ipnpb.paypal.com/cgi-bin/webscr', {
    ...payload,
    cmd: '_notify-validate'
  });

  if (verification.data === 'VERIFIED') {
    await axios.post('https://api.oraclesignal.site/logs/paypal', {
      contributor: payload.custom,
      amount: payload.mc_gross,
      transaction: payload.txn_id
    });
    res.status(200).send('Logged');
  } else {
    res.status(400).send('Invalid IPN');
  }
});

app.listen(3000, () => console.log('IPN listener running on port 3000'));
