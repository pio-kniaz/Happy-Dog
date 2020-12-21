const mongoose = require('mongoose');
const config = require('@/config/config');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    // eslint-disable-next-line no-console
    console.log(`MongoDB 💾 Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
