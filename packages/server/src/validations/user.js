const Joi = require('joi');

const createUserSchemaValidation = Joi.object({
  firstName: Joi.string()
    // .pattern(new RegExp('/[a-zA-Z]+/'))
    .empty()
    .max(20)
    .required()
    .messages({
      'string.pattern.base': '"firstName" allows only letters',
      'string.empty': '"firstName" cannot be an empty field',
      'string.max': '"firstName" should have a maximum length of {#limit}',
      'any.required': '"firstName" is a required field',
    }),
  lastName: Joi.string()
    .alphanum()
    .max(20)
    .required(),
  email: Joi.string()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  passwordConfirmation: Joi.required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'password do not match' }),
  terms: Joi.boolean().valid(true)
    .messages({
      'any.only': 'Must be true',
    }),
});

module.exports = {
  createUserSchemaValidation,
};
