const ApiError = require('@/error/ApiError');

// eslint-disable-next-line no-unused-vars
const apiErrorHandler = (err, _req, res, _next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode || 500);
    return res.json({
      success: false,
      message: err.message,
    });
  }
  res.status(500);
  return res.json({
    success: false,
    message: 'Unexpected error',
  });
};

module.exports = apiErrorHandler;
