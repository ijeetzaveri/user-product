const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { SALT_ROUNDS, JWT_SECRET_KEY } = require("../config");

const { APIError } = require("../middlewares/APIError");

const USER = require("../models/user");

/**
 * Register a user
 * @param payload
 * @returns
 */
exports.registerUser = async (payload) => {
  try {
    const user = await USER.findOne({ email: payload.email });
    if (user) throw new APIError(422, "Email is already in use.");

    payload.password = bcrypt.hashSync(payload.password, +SALT_ROUNDS);
    await USER.create(payload);

    return true;
  } catch (error) {
    throw error;
  }
};

/**
 * Login a user
 * @param {*} payload
 * @returns
 */
exports.loginUser = async (payload) => {
  try {
    const { email, password } = payload;

    const user = await USER.findOne({ email });
    if (!user) throw new APIError(422, "Invalid email or password.");

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) throw new APIError(422, "Invalid email or password.");

    const tokenData = { id: user.id, email: user.email, role: user.role };
    const token = jwt.sign(tokenData, JWT_SECRET_KEY);

    return token;
  } catch (error) {
    throw error;
  }
};
