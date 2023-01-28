'use strict'

const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CurriculosExperiencias', {
      CurriculoId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'curriculos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ExperienciaId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'experiencias',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      termino: {
        type: Sequelize.DATE,
        allowNull: true
      },
      cidade: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      pais: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: true
      },
      salario: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      cargo: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CurriculosExperiencias')
  }
}
