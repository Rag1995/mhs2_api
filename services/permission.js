const { Permission, Role } = require("../models/index");
const { fn, col } = require("sequelize");

exports.create = (body) => {
  return Permission.create(body);
};

exports.findAll = () => {
  return Permission.findAll({
    order: [
      ["perm_router", "ASC"],
      ["perm_method", "ASC"],
    ],
  });
};

exports.findById = (id) => {
  return Permission.findByPk(id);
};

exports.update = (id, body) => {
  return Permission.update(body, {
    where: { id: id },
  });
};

exports.delete = (id) => {
  return Permission.destroy({
    where: { id: id },
  });
};

exports.checkPermission = (roleId, permRouter, permMethod) => {
  return Permission.findOne({
    where: {
      perm_router: permRouter,
      perm_method: permMethod,
    },
    include: [
      {
        model: Role,
        as: "roles",
        where: { id: roleId },
      },
    ],
  });
};

exports.findPermMethodByPermTable = (perm_table) => {
  return new Promise((resolve, reject) => {
    Permission.findAll({
      attributes: [[fn("DISTINCT", col("perm_method")), "perm_method"]],
      where: {
        perm_table: perm_table,
      },
    })
      .then((data) => {
        resolve(data.map((row) => row.perm_method));
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.mapWithPerm = (perm_table, handler) => {
  return new Promise((resolve, reject) => {
    Promise.all([this.findPermMethodByPermTable(perm_table), handler])
      .then((data) => {
        resolve({ perm_method: data[0], result: data[1] });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
