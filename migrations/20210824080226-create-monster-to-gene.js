'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MonsterToGenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monster_No: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        comment: "魔物圖鑑編號",
      },
      gene_No: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        comment: "基因編號",
      },
      regular: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: "固有基因",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MonsterToGenes');
  }
};
