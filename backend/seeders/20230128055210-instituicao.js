'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'instituicoes',
      [
        {
          nome: 'UNIVERSIDADES ESTADUAL DE MARINGÁ',
          cidade: 'Maringá',
          pais: 'Brasil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'FACULDADE PRESIDENTE ANTÔNIO',
          cidade: 'Leopoldina',
          pais: 'Brasil',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Instituicoes', null, {})
  }
}
