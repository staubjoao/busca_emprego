'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CurriculosVagas',
      [
        {
          VagaId: 1,
          CurriculoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          VagaId: 1,
          CurriculoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          VagaId: 2,
          CurriculoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          VagaId: 2,
          CurriculoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CurriculosVagas', null, {})
  }
}
