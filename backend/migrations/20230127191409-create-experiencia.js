'use strict'

const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Experiencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresa: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(45)
      },
      endereco: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(45)
      },
      ramo: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Experiencias')
  }
}
