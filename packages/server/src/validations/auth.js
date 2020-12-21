const Joi = require('joi');

const { ValidationMessages } = require('@/validations/validation');

const loginSchemaValidation = Joi.object({
  email: Joi.string()
    .lowercase()
    .required()
    .messages({
      'any.required': `${ValidationMessages.required}`,
    }),
  password: Joi.string()
    .required()
    .messages({
      'any.required': `${ValidationMessages.required}`,
    }),
});

module.exports = {
  loginSchemaValidation,
};
