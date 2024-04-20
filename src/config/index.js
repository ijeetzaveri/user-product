module.exports = {
  APP_PORT: process.env.APP_PORT || 3000,
  DB_URL: process.env.DB_URL,
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
