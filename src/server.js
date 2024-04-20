require('dotenv').config();
const app = require("./app");

const { APP_PORT } = require('./config');

const connectDB = require("./config/db");

/**
 * Start Express server.
 */
app.listen(APP_PORT, () => {
  console.log(`********************************************************
   Server started on port ${APP_PORT}
********************************************************
  `);
  connectDB();
});
