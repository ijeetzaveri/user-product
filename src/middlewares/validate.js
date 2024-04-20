exports.validate =
  (bodySchema = null, paramsSchema = null) =>
  (req, res, next) => {
    if (bodySchema) {
      const { error: bodyError } = bodySchema.validate(req.body);
      if (bodyError) {
        return res
          .status(422)
          .json({ status: false, error: bodyError.details[0].message });
      }
    }

    if (paramsSchema) {
      const { error: bodyError } = paramsSchema.validate(req.params);
      if (bodyError) {
        return res
          .status(422)
          .json({ status: false, error: bodyError.details[0].message });
      }
    }
    next();
  };
