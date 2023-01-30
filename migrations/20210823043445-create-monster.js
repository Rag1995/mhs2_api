"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Monsters",
      {
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
          comment: "魔物圖鑑編號",
          get() {
            const No = this.getDataValue("No");
            return String(No).padStart(3, "0");
          },
        },
        name_tw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name_en: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "力量(power), 技巧(technical), 速度(speed)",
          // validate: {
          //   isIn: [["power", "technical", "speed"]],
          // },
        },
        icon: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        egg: {
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
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
        paranoid: true,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Monsters");
  },
};
