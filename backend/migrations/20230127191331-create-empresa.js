'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING(22),
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      endereco: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false
      },
      bairro: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false
      },
      cidade: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false
      },
      estado: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false
      },
      pais: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      complemento: {
        type: Sequelize.DataTypes.STRING(80),
        allowNull: true
      },
      telefone: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      ramo: {
        type: Sequelize.DataTypes.STRING(64),
        allowNull: false
      },
      cnpj: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      cep: {
        type: Sequelize.DataTypes.CHAR(8),
        allowNull: false
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
    await queryInterface.dropTable('Empresas')
  }
}
