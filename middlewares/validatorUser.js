const { body } = require("express-validator");

exports.usernameTrim = () => {
  return body("username").trim().toLowerCase();
};

exports.username = () => {
  return body("username")
    .trim()
    .toLowerCase()
    .isLength({ min: 8 })
    .withMessage("使用者名稱需要至少8碼")
    .bail()
    .matches(/^[a-z0-9_]+$/)
    .withMessage("使用者名稱只能有半形英文字母、數字、底線_")
    .bail()
    .matches(/[a-z]/)
    .withMessage("使用者名稱須包含半形英文字母")
    .bail()
    .matches(/[0-9]/)
    .withMessage("使用者名稱須包含半形數字")
    .bail();
};

exports.password = () => {
  return body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("密碼需要至少8碼")
    .bail()
    .matches(/^[a-zA-Z0-9~!@#$%^&*()_+\-=<>?]+$/)
    .withMessage("使用者名稱只能有a-z、A-Z、0-9、特殊字元~!@#$%^&*()_+-=<>?")
    .bail()
    .matches(/[a-z]/)
    .withMessage("密碼須包含a-z")
    .bail()
    .matches(/[A-Z]/)
    .withMessage("密碼須包含A-Z")
    .bail()
    .matches(/[0-9]/)
    .withMessage("密碼須包含0-9")
    .bail()
    .matches(/[~!@#$%^&*()_+\-=<>?]/)
    .withMessage("密碼須包含特殊字元~!@#$%^&*()_+-=<>?")
    .bail();
};
