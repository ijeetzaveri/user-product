const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/user");
const { validate } = require("../middlewares/validate");

const { registerSchema, loginSchema } = require("../validations/user");

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

module.exports = router;
