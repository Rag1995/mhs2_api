"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = require("../seeder_demo_data/Genes.json");
    await queryInterface.bulkInsert(
      "Genes",
      data.map((el) => {
        return {
          ...el,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Genes", null, {});
  },
};
