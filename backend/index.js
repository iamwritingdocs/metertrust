const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Version 2 supports CommonJS
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/api/verify', async (req, res) => {
  const proof = req.body;
  const verifyRes = await fetch(`https://developer.worldcoin.org/api/v1/verify/app_staging_666df666f482fb26fc2eda9c7ed86f79`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...proof, action: 'verify' }),
  });

  const verifyData = await verifyRes.json();

  if (verifyRes.ok) {
    res.status(200).json({ code: 'success', detail: 'Verification succeeded' });
  } else {
    res.status(verifyRes.status).json({ code: verifyData.code, detail: verifyData.detail });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
