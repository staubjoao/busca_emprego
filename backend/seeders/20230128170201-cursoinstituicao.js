'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CursosInstituicoes',
      [
        {
          CursoId: 1,
          InstituicaoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CursoId: 2,
          InstituicaoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CursosInstituicoes', null, {})
  }
}
