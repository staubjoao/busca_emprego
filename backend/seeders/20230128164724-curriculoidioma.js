'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CurriculosIdiomas',
      [
        {
          CurriculoId: 1,
          IdiomaId: 2,
          nivel: 'Intermediário',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CurriculoId: 2,
          IdiomaId: 1,
          nivel: 'Basico',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CurriculosIdiomas', null, {})
  }
}
