'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jornada: {
        type: Sequelize.DataTypes.CHAR(2),
        allowNull: true
      },
      tipo_contrato: {
        type: Sequelize.DataTypes.CHAR(2),
        allowNull: false
      },
      nivel_hierarquico: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      salario: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      EmpresaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'empresas',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Vagas')
  }
}
