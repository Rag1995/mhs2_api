"use strict";

const { User } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = require("../seeder_demo_data/Users.json");
    await User.bulkCreate(data, { individualHooks: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
