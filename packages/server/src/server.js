const express = require('express');
const test = require('@/config/keys');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

test('sdsds');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
