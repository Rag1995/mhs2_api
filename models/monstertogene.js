"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MonsterToGene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MonsterToGene.init(
    {
      monster_No: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        comment: "魔物圖鑑編號",
      },
      gene_No: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        comment: "基因編號",
      },
      regular: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: "固有基因",
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "MonsterToGene",
    }
  );
  return MonsterToGene;
};
