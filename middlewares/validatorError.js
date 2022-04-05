const { validationResult } = require("express-validator");

exports.validatorError = (req, res, next) => {
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    return { location: location, param: param, msg: msg };
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    res.status(400).json({ errors: result.array() });
  } else {
    next();
  }
};
