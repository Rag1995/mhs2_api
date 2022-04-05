"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gene.belongsToMany(models.Monster, {
        as: "monsters",
        through: models.MonsterToGene,
        sourceKey: "No",
        foreignKey: "gene_No",
      });
    }
  }
  Gene.init(
    {
      No: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get() {
          const No = this.getDataValue("No");
          return String(No).padStart(3, "0");
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "基因名稱",
      },
      skill: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "技能名稱",
      },
      rank: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "技能強度：小(S), 中(M), 大(L), 特大(XL)",
        validate: {
          isIn: [["S", "M", "L", "XL"]],
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "主/被動",
        validate: {
          isIn: [["被動", "主動"]],
        },
      },
      element: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:
          "無屬性(normal), 火屬性(fire), 水屬性(water), 雷屬性(thunder), 冰屬性(ice), 龍屬性(dragon), 虹色(rainbow)",
        validate: {
          isIn: [
            ["normal", "fire", "water", "thunder", "ice", "dragon", "rainbow"],
          ],
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:
          "一般(no-type), 力量(power), 技巧(technical), 速度(speed), 虹色(rainbow)",
        validate: {
          isIn: [["no-type", "power", "technical", "speed", "rainbow"]],
        },
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "解鎖等級",
      },
      kinship_cost: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "羈絆消耗",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Gene",
    }
  );
  return Gene;
};
