const Joi = require("joi");

const { ROLES } = require("../utils/enums");

exports.registerSchema = Joi.object({
  username: Joi.string().min(3).trim().allow(null),
  email: Joi.string().email().trim().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      "string.min": "Password must be at least 8 characters long",
      "any.required": "Password is required",
    }),
  role: Joi.string().trim().valid(...Object.values(ROLES)),
});

exports.loginSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().required(),
});
