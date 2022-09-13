"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("services", "businessId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "businesses",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("services", "businessId", {
      null: true,
    });
  },
};
