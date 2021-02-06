const pick = require('lodash/pick');

const User = require('@/models/User');
const ApiError = require('@/error/ApiError');

const { createUserSchemaValidation } = require('@/validations/user');
const { formErrorParser, uniqueValidatorParser } = require('@/utils/formErrorParser');

// @desc Create user account
// @route POST /api/user/register
// @access Public
const createUser = async (req, res, next) => {
  const data = createUserSchemaValidation.validate(req.body, { abortEarly: false });
  if (data.error) {
    next(ApiError.badRequest(formErrorParser(data.error)));
  }

  const newUser = new User(req.body);

  try {
    newUser.password = await User.hashPassword(newUser.password);
    await newUser.save();
    return res.status(201).json({
      data: {
        success: true,
      },
    });
  } catch (err) {
    let error = err;
    if (err.name === 'ValidationError') {
      error = uniqueValidatorParser(err);
    }
    return next(ApiError.badRequest(error));
  }
};

// @desc Retrieve user details
// @route GET /api/user/me
// @access Private
const userMe = async (req, res, next) => {
  if (!req.userId) {
    return next(ApiError.badRequest());
  }
  try {
    const currentUser = await User.findById(req.userId);
    return res.status(200).json({
      data: {
        success: true,
        user: pick(currentUser, ['id', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt']),
      },
    });
  } catch (error) {
    return next(ApiError.badRequest());
  }
};
module.exports = {
  createUser,
  userMe,
};
