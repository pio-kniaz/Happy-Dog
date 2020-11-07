const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const config = require('@/config/config');
const connectDB = require('@/config/db');
const apiErrorHandler = require('@/error/apiErrorHandler');
const userRoutes = require('@/routes/api/userRoutes');
const authRoutes = require('@/routes/api/authRoutes');

connectDB();

const app = express();

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());

if (config.mode === 'production') {
  app.use(express.static(path.join(__dirname, 'client')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(apiErrorHandler);
app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running in ${config.mode} mode on port ${config.port}`.cyan);
});
