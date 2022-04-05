const router = require("express").Router();
const { checkPermission } = require("../middlewares/helper");

const { queryPage, queryPerPage } = require("../middlewares/validator");
const { validatorError } = require("../middlewares/validatorError");
const Monster = require("../controller/monster");

router.get("/monsters/all", Monster.findAll);
router.get(
  "/monsters",
  [queryPage(), queryPerPage(10, 10, 10)],
  validatorError,
  Monster.find
);
router.get("/monster/:No", Monster.findByNo);

router.get("/admin/monsters/all", checkPermission, Monster.findAllWithPerm);
// router.get("/admin/monster/:No", checkPermission, Monster.findByNoWithPerm);

module.exports = router;
