const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const ApiError = require('@/error/ApiError');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,

  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  terms: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true,
});

userSchema.statics.hashPassword = async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw ApiError.internal('Unexpected error');
  }
};

userSchema.plugin(uniqueValidator, { message: 'Expected {PATH} to be unique.', type: 'mongoose-unique-validator' });

const User = model('User', userSchema);

module.exports = User;
