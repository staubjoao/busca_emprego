'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vagas',
      [
        {
          id: 1,
          tipo: 'Segurança',
          nivel_hierarquico: 'Experiente',
          descricao: 'Mimir',
          salario: '2475.75',
          EmpresaId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          tipo: 'Programador Web Full Stack',
          nivel_hierarquico: 'Senior',
          descricao: 'Mimir',
          salario: '29475.75',
          EmpresaId: 2,
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
