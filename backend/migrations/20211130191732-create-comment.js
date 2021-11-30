'use strict';

const { post } = require("../app");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsers: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          models: 'Users',
          key: 'id'
        }
      },
      postID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        References: {
          models: 'Post',
          key: 'id'
        }
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attachement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};