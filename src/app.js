const express = require("express");
const path = require("path");
const logger = require("morgan");

const routes = require("./routes");

const { errorHandler } = require("./middlewares/APIError");

/**
 * create server setup
 *
 * @returns {Express}
 */
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// api routes
app.use("/api", routes);

app.use(errorHandler);

// route not-found error return
app.use((req, res) => {
  const apiResponse = {
    successful: false,
    message: "Route not found.",
  };
  return res.status(404).json(apiResponse);
});

module.exports = app;
