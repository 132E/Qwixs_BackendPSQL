"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "services",
      [
        {
          name: "Branding",
          description:
            "We will create a brand for your business that will help you stand out from the competition.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Web Design",
          description:
            "We will create a website for your business that will help you stand out from the competition.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coffee",
          description: "Make a mean cup of joe.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roasting Coffee",
          description: "We will roast your own coffee beans.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("services", null, {});
  },
};
