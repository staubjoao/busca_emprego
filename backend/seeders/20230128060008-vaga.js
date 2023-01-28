'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vagas',
      [
        {
          EmpresaId: 2,
          jornada: 'AL',
          tipo_contrato: 'PS',
          nivel_hierarquico: 'EF',
          salario: '6335.83',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          EmpresaId: 1,
          jornada: 'AL',
          tipo_contrato: 'OU',
          nivel_hierarquico: 'OU',
          salario: '29475.75',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vagas', null, {})
  }
}
