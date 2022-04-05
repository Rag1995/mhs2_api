const { RoleToPermission } = require("../models/index");

exports.create = (body) => {
  return RoleToPermission.create(body);
};

exports.findAll = () => {
  return RoleToPermission.findAll({
    order: [["role_name", "ASC"]],
  });
};

exports.findById = (id) => {
  return RoleToPermission.findByPk(id);
};

exports.update = (id, body) => {
  return RoleToPermission.update(body, {
    where: { id: id },
  });
};

exports.delete = (id) => {
  return RoleToPermission.destroy({
    where: { id: id },
  });
};
