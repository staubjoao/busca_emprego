'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Experiencias',
      [
        {
          id: 1,
          empresa: 'Google',
          endereco: 'Av. Brigadeiro Faria Lima',
          ramo: 'Serviços online e software',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          empresa: 'EXPRESSO TRANSPORTE E TURISMO LTDA',
          endereco: 'Rua da Concórdia',
          ramo: 'Construção',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Experiencias', null, {})
  }
}
