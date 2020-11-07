const Joi = require('joi');

const loginSchemaValidation = Joi.object({
  email: Joi.string()
    .lowercase()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

module.exports = {
  loginSchemaValidation,
};
