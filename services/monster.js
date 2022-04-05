const { Monster, Gene } = require("../models/index");

const exclude = ["createdAt", "deletedAt"];

exports.findAll = () => {
  return Monster.findAll({
    attributes: { exclude: exclude },
    order: [["No", "ASC"]],
  });
};

exports.find = ({ page, perPage }) => {
  return Monster.findAndCountAll({
    offset: perPage * (page - 1),
    limit: perPage,
    attributes: { exclude: exclude },
    order: [["No", "ASC"]],
  });
};

exports.findByNo = (No) => {
  return Monster.findOne({
    where: { No: No },
    attributes: { exclude: exclude },
    include: [
      {
        model: Gene,
        as: "genes",
        through: { attributes: [] },
        attributes: { exclude: exclude },
        order: [["No", "ASC"]],
      },
    ],
  });
};
