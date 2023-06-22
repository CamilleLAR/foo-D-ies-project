"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("Users", "profile_pic");
    await queryInterface.addColumn("Users", "profile_pic", {
      type: Sequelize.TEXT
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Users", "profile_pic");
    await queryInterface.addColumn("Users", "profile_pic", {
      type: Sequelize.BLOB
    });
  }
};
