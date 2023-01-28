'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Cursos',
      [
        {
          curso: 'Economia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          curso: 'Ciências da Computação',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cursos', null, {})
  }
}
