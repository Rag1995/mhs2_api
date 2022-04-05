const { Gene, Monster } = require("../models/index");
const { Op } = require("sequelize");

const exclude = ["createdAt", "deletedAt"];

exports.create = (body) => {
  return Gene.create(body);
};

exports.findAll = () => {
  return Gene.findAndCountAll({
    attributes: {
      exclude: exclude,
    },
    order: [["No", "ASC"]],
  });
};

exports.find = ({ page, perPage, element, type, rank, category, search }) => {
  return Gene.findAndCountAll({
    offset: perPage * (page - 1),
    limit: perPage,
    attributes: { exclude: exclude },
    order: [["No", "ASC"]],
    where: {
      ...(element && { element: element }),
      ...(type && { type: type }),
      ...(rank && { rank: rank }),
      ...(category && { category: category }),
      [Op.or]: {
        name: { [Op.like]: `%${search}%` },
        skill: { [Op.like]: `%${search}%` },
      },
    },
  });
};

exports.findByNoList = (list) => {
  return Gene.findAll({
    where: { No: list },
    attributes: { exclude: exclude },
    order: [["No", "ASC"]],
  });
};

exports.findByNo = (No) => {
  return Gene.findOne({
    where: { No: No },
    attributes: { exclude: exclude },
    include: [
      {
        model: Monster,
        as: "monsters",
        through: { attributes: [] },
        attributes: ["No", "name_tw", "icon", "egg"],
        order: [["No", "ASC"]],
      },
    ],
  });
};

exports.update = (id, body) => {
  return Gene.update(body, {
    where: { id: id },
  });
};

exports.delete = (id) => {
  return Gene.destroy({
    where: { id: id },
  });
};
