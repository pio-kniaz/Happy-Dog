require('colors');
require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT,
  mode: process.env.MODE,

  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  accessTokenExpires: process.env.ACCESS_TOKEN_EXPIRES,

  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  refreshTokenExpires: process.env.REFRESH_TOKEN_EXPIRES,
};
