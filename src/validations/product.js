const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createProductSchema = Joi.object({
  title: Joi.string().min(3).trim().required(),
  description: Joi.string().min(10).trim().required(),
  inventoryCount: Joi.number().min(0),
});

exports.getProductIdSchema = Joi.object({
  id: Joi.objectId().required(),
});

exports.updateProductSchema = Joi.object({
  title: Joi.string().min(3).trim(),
  description: Joi.string().min(10).trim(),
  inventoryCount: Joi.number().min(0),
});
