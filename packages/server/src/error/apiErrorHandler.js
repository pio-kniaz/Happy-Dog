const ApiError = require('@/error/ApiError');

const apiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode || 500);
    return next(res.json({
      success: false,
      message: err.message,
    }));
  }
  res.status(500);
  return res.json({
    success: false,
    message: 'Unexpected error',
  });
};

module.exports = apiErrorHandler;
