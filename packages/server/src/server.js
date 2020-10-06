const express = require('express');
const config = require('@/config/config');

const app = express();

app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running in ${config.mode} mode on port ${config.port}`.magenta);
});
