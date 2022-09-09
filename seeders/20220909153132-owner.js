"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "owners",
      [
        {
          firstName: "Eric",
          lastName: "Deleon",
          email: "deleoneric132@gmail.com",
          username: "Eric132",
          password: "132design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "John",
          lastName: "Doe",
          email: "email@email.com",
          username: "doedo",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("owners", null, {});
  },
};
