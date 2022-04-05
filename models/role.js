"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.Permission, {
        as: "permissions",
        through: "RoleToPermission",
        foreignKey: "role_id",
      });
    }
  }
  Role.init(
    {
      role_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Role",
    }
  );
  return Role;
};
