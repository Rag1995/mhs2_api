"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = require("../seeder_demo_data/RoleToPermissions.json");
    await queryInterface.bulkInsert(
      "RoleToPermissions",
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
    await queryInterface.bulkDelete("RoleToPermissions", null, {});
  },
};
