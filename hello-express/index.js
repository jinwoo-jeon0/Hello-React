const express = require('express');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('\n\nHello, world!\n\n');
});

app.get('/hello-express', (req, res) => {
  res.send('\n\nHello, express!\n\n');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});