const User = require('@/models/User');
const ApiError = require('@/error/ApiError');

const { loginSchemaValidation } = require('@/validations/auth');
const { signTokenAccessToken, signRefreshToken, verifyRefreshToken } = require('@/utils/jwt');

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
    const accessToken = signTokenAccessToken(user.id);
    const refreshToken = signRefreshToken(user.id);
    user.refreshToken = refreshToken;
    await user.save();
    return res.status(200).json({
      data: {
        success: true,
        accessToken,
        refreshToken,
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
  const { token } = req.body;
  if (!token) {
    throw ApiError.internal();
  }
  try {
    const userByRefreshToken = await User.findOne({ refreshToken: token });
    if (!userByRefreshToken) {
      throw ApiError.forbidden();
    }
    const userId = verifyRefreshToken(token);
    const newAccessToken = signTokenAccessToken(userId);
    const newRefreshToken = signRefreshToken(userId);

    userByRefreshToken.refreshToken = newRefreshToken;
    await userByRefreshToken.save();
    return res.status(200).json({
      data: {
        success: true,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  login,
  refreshToken,
};
