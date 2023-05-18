const Joi = require('joi');

const schemaSale = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
})
  .required()
  .messages({
    'any.required': '{#label} is required',
  });

const schemaQuantity = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
})
  .required()
  .messages({
    'number.min': '{#label} must be greater than or equal to 1',
  });

module.exports = {
  schemaSale,
  schemaQuantity,
};
