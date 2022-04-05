const { Role } = require("../models/index");

exports.create = (body) => {
  return Role.create(body);
};

exports.findAll = () => {
  return Role.findAll({
    order: [["role_name", "ASC"]],
  });
};

exports.findById = (id) => {
  return Role.findByPk(id);
};

exports.update = (id, body) => {
  return Role.update(body, {
    where: { id: id },
  });
};

exports.delete = (id) => {
  return Role.destroy({
    where: { id: id },
  });
};
