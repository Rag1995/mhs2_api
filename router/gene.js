const router = require("express").Router();

const { query } = require("express-validator");
const { queryPage, queryPerPage } = require("../middlewares/validator");
const { validatorError } = require("../middlewares/validatorError");
const Gene = require("../controller/gene");

router.get("/genes/all", Gene.findAll);
router.get("/genes/active", Gene.findByNoList);
router.get(
  "/genes",
  [queryPage(), queryPerPage(12, 12, 12)],
  validatorError,
  Gene.find
);
router.get("/gene/:No", Gene.findByNo);

module.exports = router;
