const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { hash, compare } = require('bcryptjs');

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
    lowercase: true,
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
  refreshToken: {
    type: String,
  },
}, {
  timestamps: true,
});

userSchema.statics.hashPassword = async function hashPassword(password) {
  try {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw ApiError.internal('Unexpected error');
  }
};

userSchema.statics.findByCredentials = async function findByCredentials(credentials) {
  const { email, password } = credentials;
  const user = await this.findOne({ email });
  if (!user) {
    throw ApiError.internal('User not found');
  }
  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    throw ApiError.unAuthorized('Password not correct');
  }
  return user;
};

userSchema.plugin(uniqueValidator, { message: 'Expected {PATH} to be unique.', type: 'mongoose-unique-validator' });

const User = model('User', userSchema);

module.exports = User;
