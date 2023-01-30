'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CurriculosCursos',
      [
        {
          inicio: '2022-01-10',
          termino: null,
          CurriculoId: 1,
          CursoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          inicio: '2022-01-10',
          termino: '2022-10-10',
          CurriculoId: 2,
          CursoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CurriculosCursos', null, {})
  }
}
