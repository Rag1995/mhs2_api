const passport = require("../config/passport");
const { Permission, RoleToPermission } = require("../models/index");

exports.checkPermission = (roleId, permName) => {
  return new Promise((resolve, reject) => {
    Permission.findOne({
      where: {
        perm_name: permName,
      },
      include: {
        model: RoleToPermission,
        where: {
          role_id: roleId,
        },
      },
    })
      .then((rolePermission) => {
        if (rolePermission) {
          resolve(rolePermission);
        } else {
          reject({ message: "Forbidden" });
        }
      })
      .catch(() => {
        reject({ message: "Forbidden" });
      });
  });
};
