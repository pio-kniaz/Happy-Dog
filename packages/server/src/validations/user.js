const Joi = require('joi');

const { ValidationMessages } = require('@/validations/validation');
const { alphaNumWithLatinRegExp, passwordFormatRegExp } = require('@/const/regExp');

const createUserSchemaValidation = Joi.object({
  firstName: Joi
    .string()
    .pattern(alphaNumWithLatinRegExp, 'firstName')
    .empty()
    .max(35)
    .required()
    .messages({
      'string.base': `${ValidationMessages.wrongFormat}`,
      'string.pattern.name': `${ValidationMessages.wrongFormat}`,
      'string.empty': `${ValidationMessages.required}`,
      'string.max': `${ValidationMessages.maxLength} {#limit}`,
      'any.required': `${ValidationMessages.required}`,
    }),
  lastName: Joi
    .string()
    .pattern(alphaNumWithLatinRegExp, 'lastName')
    .empty()
    .max(35)
    .required()
    .messages({
      'string.base': `${ValidationMessages.wrongFormat}`,
      'string.pattern.name': `${ValidationMessages.wrongFormat}`,
      'string.empty': `${ValidationMessages.required}`,
      'string.max': `${ValidationMessages.maxLength} {#limit}`,
      'any.required': `${ValidationMessages.required}`,
    }),
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.base': `${ValidationMessages.wrongFormat}`,
      'string.email': `${ValidationMessages.wrongFormat}`,
      'string.max': `${ValidationMessages.maxLength} {#limit}`,
      'any.required': `${ValidationMessages.required}`,
    }),
  password: Joi
    .string()
    .min(6)
    .max(30)
    .pattern(passwordFormatRegExp, 'password')
    .required()
    .messages({
      'string.base': `${ValidationMessages.wrongFormat}`,
      'string.pattern.name': `${ValidationMessages.passwordFormat}`,
      'string.min': `${ValidationMessages.minLength} {#limit}`,
      'string.max': `${ValidationMessages.maxLength} {#limit}`,
      'any.required': `${ValidationMessages.required}`,
    }),
  passwordConfirmation: Joi
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': `${ValidationMessages.passwordConfirmation}` }),
  birthday: Joi
    .date()
    .required()
    .messages({
      'date.base': `${ValidationMessages.wrongFormat}`,
      'any.required': `${ValidationMessages.required}`,
    }),
  gender: Joi
    .string()
    .valid('male', 'female')
    .required()
    .messages({
      'date.base': `${ValidationMessages.wrongFormat}`,
      'any.required': `${ValidationMessages.required}`,
      'any.only': `${ValidationMessages.atLeastMustBeSelected}`,
    }),
  terms: Joi
    .boolean().valid(true)
    .messages({
      'any.only': `${ValidationMessages.termRequired}`,
    }),
});

module.exports = {
  createUserSchemaValidation,
};
