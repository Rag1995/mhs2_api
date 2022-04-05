const { User } = require("../models/index");
const { Op } = require("sequelize");

exports.create = (body) => {
  return User.create(body);
};

exports.findByPk = (id) => {
  return User.findByPk(id);
};

exports.findByUsername = (username) => {
  return User.findOne({
    where: {
      username: username,
      deletedAt: { [Op.eq]: null },
    },
  });
};

exports.delete = (id) => {
  return User.destroy({
    where: { id: id },
  });
};
