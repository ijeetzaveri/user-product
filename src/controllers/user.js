const { registerUser, loginUser } = require("../services/user");

/**
 * Register a user
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.register = async (req, res) => {
  try {
    const payload = req.body;
    await registerUser(payload);

    return res.status(201).json({
      status: true,
      message: "User Registered Successfully.",
    });
  } catch (error) {
    return res.status(error?.status ?? 500).json({
      status: false,
      error: error?.message ?? "Something went wrong while register a user..!",
    });
  }
};

/**
 * Login a user
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.login = async (req, res) => {
  try {
    const payload = req.body;
    const data = await loginUser(payload);

    return res.status(200).json({
      status: true,
      message: "User Logged In Successfully.",
      data,
    });
  } catch (error) {
    return res.status(error?.status ?? 500).json({
      status: false,
      error: error?.message ?? "Something went wrong while logging a user..!",
    });
  }
};
