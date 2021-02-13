const jwt = require('jsonwebtoken');

const config = require('@/config/config');
const ApiError = require('@/error/ApiError');

const isAuth = (req, _res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    throw ApiError.forbidden();
  }
  const token = authorization.split(' ')[1];
  try {
    const { userId } = jwt.verify(token, config.accessTokenSecret);
    req.userId = userId;
    next();
  } catch (error) {
    if (error.message === 'jwt expired') {
      throw ApiError.unAuthorized('Access token expired');
    }
    throw ApiError.forbidden();
  }
};
const verifyRefreshToken = (token) => {
  try {
    const { userId } = jwt.verify(token, config.refreshTokenSecret);
    return userId;
  } catch (error) {
    throw ApiError.forbidden();
  }
};

const signAccessToken = (userId) => {
  const payload = {
    userId,
  };
  const secret = config.accessTokenSecret;
  const options = { expiresIn: config.accessTokenExpires };
  try {
    const token = jwt.sign(payload, secret, options);
    return token;
  } catch (error) {
    throw ApiError.internal('Unexpected error');
  }
};

const signRefreshToken = (userId) => {
  const payload = {
    userId,
  };
  const secret = config.refreshTokenSecret;
  const options = { expiresIn: config.refreshTokenExpires };
  try {
    const token = jwt.sign(payload, secret, options);
    return token;
  } catch (error) {
    throw ApiError.internal('Unexpected error');
  }
};

const sendRefreshToken = (res, refreshToken) => {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    path: '/api/auth/refresh-token',
  });
};

module.exports = {
  signAccessToken,
  signRefreshToken,
  sendRefreshToken,
  isAuth,
  verifyRefreshToken,
};
