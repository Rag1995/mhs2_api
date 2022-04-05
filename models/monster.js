"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Monster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Monster.belongsToMany(models.Gene, {
        as: "genes",
        through: models.MonsterToGene,
        sourceKey: "No",
        foreignKey: "monster_No",
      });
    }
  }
  Monster.init(
    {
      No: {
        type: DataTypes.INTEGER,
        allowNull: false,

        comment: "魔物圖鑑編號",
        get() {
          const No = this.getDataValue("No");
          return String(No).padStart(3, "0");
        },
      },
      name_tw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "力量(power), 技巧(technical), 速度(speed)",
        validate: {
          isIn: [["power", "technical", "speed"]],
        },
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      egg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Monster",
    }
  );
  return Monster;
};
