'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CurriculosExperiencias',
      [
        {
          inicio: '2022-01-23',
          termino: null,
          cidade: 'Maringá',
          pais: 'Brasil',
          salario: '2500',
          cargo: 'Programador Junior',
          ExperienciaId: 1,
          CurriculoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          inicio: '2022-01-21',
          termino: '2022-04-23',
          cidade: 'São Paulo',
          pais: 'Brasil',
          salario: '25600',
          cargo: 'Advogado',
          ExperienciaId: 2,
          CurriculoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CurriculosExperiencias', null, {})
  }
}
