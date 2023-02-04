'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Idiomas',
      [
        {
          id: 1,
          idioma: 'Inglês',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          idioma: 'Espanhol',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          idioma: 'Francês',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Idiomas', null, {})
  }
}
