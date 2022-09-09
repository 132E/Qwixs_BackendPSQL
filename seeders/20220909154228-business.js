"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "businesses",
      [
        {
          name: "132 Design",
          coverImage: "https://i.imgur.com/FkSrgjO.jpg",
          about:
            "132 Design is a full service design studio that specializes in branding, web design, and print design. We are a small team of designers, developers, and project managers that work together to create beautiful and functional designs for our clients.",
          aboutImage: "https://i.imgur.com/pNqSHGg.jpg",
          address: "123 Main St",
          city: "Houston",
          state: "TX",
          zipcode: 77002,
          phone: 5555555,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Coffee Shop",
          coverImage: "https://i.imgur.com/FkSrgjO.jpg",
          about:
            "Coffee all day, every day. We have the best coffee in town. Come in and try our new coffee drinks.",
          aboutImage: "https://i.imgur.com/pNqSHGg.jpg",
          address: "5050 Main St",
          city: "El Paso",
          state: "TX",
          zipcode: 79902,
          phone: 4567890,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("businesses", null, {});
  },
};
