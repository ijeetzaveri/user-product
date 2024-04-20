class APIError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function errorHandler(err, req, res, next) {
  if (err instanceof APIError) {
    res.status(err.status).json({ status: false, error: err.message });
  } else {
    res.status(500).json({
      status: false,
      error: `Internal Server Error :::::::: ${err.message}`,
    });
  }
}

module.exports = { APIError, errorHandler };
