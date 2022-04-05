"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Genes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      No: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        comment: "基因編號",
        get() {
          const No = this.getDataValue("No");
          return String(No).padStart(3, "0");
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "基因名稱",
      },
      skill: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "技能名稱",
      },
      rank: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "技能強度：小(S), 中(M), 大(L), 特大(XL)",
        validate: {
          isIn: [["S", "M", "L", "XL"]],
        },
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "主/被動",
        validate: {
          isIn: [["被動", "主動"]],
        },
      },
      element: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: false,
        comment:
          "一般(no-type), 力量(power), 技巧(technical), 速度(speed), 虹色(rainbow)",
        validate: {
          isIn: [["no-type", "power", "technical", "speed", "rainbow"]],
        },
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: "解鎖等級",
      },
      kinship_cost: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: "羈絆消耗",
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Genes");
  },
};
