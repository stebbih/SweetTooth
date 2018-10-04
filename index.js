const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.get('/api/candies', (req, res) => {
  return res.send();
});

api.post('/api.candies', (req, res) => {
  return res.send();
});

app.get('/api/candies/:id', (req,res) => {
  return res.send();
});

app.get('/api/offers', (req, res) => {
  return res.send();
});

app.get('/api/pinatas', (req, res) => {
  return res.send();
});

app.get('/api/pinadas/:id', (req, res) => {
  return res.send();
});

app.post('/api/pinadas', (req, res) => {
  return res.send();
});

app.get('/api/pinadas/:id/hits', (req, res) => {
  return res.send();
});

app.listen(port, () => {
  console.log(`server is listening to port ${port} !`);
});
