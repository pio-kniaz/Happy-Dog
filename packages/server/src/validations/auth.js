const Joi = require('joi');

const loginSchemaValidation = Joi.object({
  email: Joi.string()
    .lowercase()
    .required(),
  password: Joi.string()
    .min(2)
    .max(50),
});

module.exports = {
  loginSchemaValidation,
};
