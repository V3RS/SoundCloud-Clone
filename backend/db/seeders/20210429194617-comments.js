"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createComments = () => {
      let comments = [];
      const data = [
        "SHEEEESH!",
        "Wow this beat are fire",
        "Wow this really takes me back",
        "Wow what an incredible artist",
        "Fire",
      ];

      for (let i = 1; i < 12; i++) {
        comments.push(
          {
            comment: data[Math.round(Math.random() * 4)],
            songId: i,
            userId: Math.round(Math.random() * 7) + 1,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
          },
          {
            comment: data[Math.round(Math.random() * 4)],
            songId: i,
            userId: Math.round(Math.random() * 7) + 1,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
          },
          {
            comment: data[Math.round(Math.random() * 4)],
            songId: i,
            userId: Math.round(Math.random() * 7) + 1,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
          }
        );
      }
      return comments;
    };

    let allComments = createComments();
    return queryInterface.bulkInsert("Comments", allComments);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
