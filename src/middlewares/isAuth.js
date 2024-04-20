const jwt = require("jsonwebtoken");

const { JWT_SECRET_KEY } = require("../config");

const { APIError } = require("./APIError");

/**
 * Middleware for authenticate the user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.isAuth = (req, res, next) => {
  try {
    if (req?.headers?.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) throw new APIError(400, "Invalid Token");

      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      req.user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      };

      next();
    } else throw new APIError(400, "Token not provided.");
  } catch (err) {
    next(err);
  }
};

/**
 * Middleware for authorized users
 * @param {*} roles 
 * @returns 
 */
exports.authorizedUsers = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new APIError(400, "You are not allow to access this endpoint.");
    }
    next();
  };
};
