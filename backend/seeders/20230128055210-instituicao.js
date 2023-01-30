'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Instituicoes',
      [
        {
          id: 1,
          nome: 'UNIVERSIDADES ESTADUAL DE MARINGÁ',
          cidade: 'Maringá',
          pais: 'Brasil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
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
