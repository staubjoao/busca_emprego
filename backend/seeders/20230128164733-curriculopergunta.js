'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CurriculosPerguntas',
      [
        {
          PerguntaId: 1,
          CurriculoId: 1,
          resposta: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PerguntaId: 2,
          CurriculoId: 2,
          resposta: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CurriculosPerguntas', null, {})
  }
}
