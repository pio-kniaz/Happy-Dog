const User = require('@/models/User');
const ApiError = require('@/error/ApiError');

const { loginSchemaValidation } = require('@/validations/auth');
const {
  signAccessToken, signRefreshToken, verifyRefreshToken, sendRefreshToken,
} = require('@/utils/jwt');

// @desc Login user
// @route POST /api/auth/login
// @access Public
const login = async (req, res, next) => {
  const data = loginSchemaValidation.validate(req.body, { abortEarly: false });
  if (data.error) {
    next(ApiError.badRequest(data.error));
  }
  try {
    const user = await User.findByCredentials(req.body);
    const accessToken = signAccessToken(user.id);
    const refreshToken = signRefreshToken(user.id);
    user.refreshToken = refreshToken;
    await user.save();
    sendRefreshToken(res, refreshToken);
    return res.status(200).json({
      data: {
        success: true,
        firstName: user.firstName,
        accessToken,
      },
    });
  } catch (err) {
    return next(err);
  }
};

// @desc Logout user
// @route POST /api/auth/logout
// @access private
const logOut = async (req, res, next) => {
  if (!req.userId) {
    next(ApiError.forbidden());
  }
  try {
    // eslint-disable-next-line no-underscore-dangle
    const user = await User.findOne({ _id: req.userId });
    user.refreshToken = '';
    await user.save();
    res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });
    return res.status(200).json({
      data: {
        success: true,
      },
    });
  } catch (err) {
    return next(err);
  }
};

// @desc refresh token
// @route POST /api/auth/refresh-token
// @access Public
const refreshToken = async (req, res, next) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    next(ApiError.internal());
  }
  try {
    const user = await User.findOne({ refreshToken: token });
    if (!user) {
      throw ApiError.forbidden();
    }
    const userId = verifyRefreshToken(token);
    const newAccessToken = signAccessToken(userId);
    const newRefreshToken = signRefreshToken(userId);

    user.refreshToken = newRefreshToken;
    await user.save();
    sendRefreshToken(res, newRefreshToken);
    return res.status(200).json({
      data: {
        success: true,
        accessToken: newAccessToken,
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  login,
  logOut,
  refreshToken,
};
