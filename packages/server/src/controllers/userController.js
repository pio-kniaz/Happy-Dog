const User = require('@/models/User');
const ApiError = require('@/error/ApiError');

const { createUserSchemaValidation } = require('@/validations/user');

// @desc Create user account
// @route POST /api/user/create
// @access Public
const createUser = async (req, res, next) => {
  const data = createUserSchemaValidation.validate(req.body, { abortEarly: false });
  if (data.error) {
    next(ApiError.badRequest(data.error));
  }

  const newUser = new User(req.body);
  try {
    newUser.password = await User.hashPassword(newUser.password);
    await newUser.save();
    return res.status(201).json({
      data: {
        success: true,
        message: 'User has been created',
      },
    });
  } catch (err) {
    return next(ApiError.badRequest(err));
  }
};

module.exports = {
  createUser,
};
