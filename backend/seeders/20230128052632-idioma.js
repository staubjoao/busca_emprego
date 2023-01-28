'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Idiomas',
      [
        {
          idioma: 'Inglês',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idioma: 'Espanhol',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
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
