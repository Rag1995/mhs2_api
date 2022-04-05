const { query } = require("express-validator");

exports.queryPage = () => {
  return query("page")
    .toInt()
    .default(1)
    .customSanitizer((v) => Math.max(1, v));
};

exports.queryPerPage = (defaultValue = 10, min = 10, max = 10) => {
  return query("perPage")
    .toInt()
    .default(defaultValue)
    .customSanitizer((v) => Math.min(Math.max(min, v), max));
};
