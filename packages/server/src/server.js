const path = require('path');
const express = require('express');
const config = require('@/config/config');

const app = express();

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

if (config.mode === 'production') {
  app.use(express.static(path.join(__dirname, 'client')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running in ${config.mode} mode on port ${config.port}`.magenta);
});
