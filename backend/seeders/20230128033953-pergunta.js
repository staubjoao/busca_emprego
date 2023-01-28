'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Perguntas', [
      {
        pergunta: 'Você está preparado para trabalhar com um grupo de pessoas?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta:
          'Você está pronto para apresentar suas ideias para a sua equipe?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você está aberto a novas experiências profissionais?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você sabe lidar com mudanças?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta:
          'Você está preparado para receber críticas construtivas do seu trabalho?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta:
          'Você está preparado para tomar uma decisão levando em conta os possíveis riscos dessa decisão?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você está comprometido em cumprir horários e metas?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta:
          'Você se considera uma pessoa capaz de lidar com adversidades?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você consegue lidar com suas emoções?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você se considera uma pessoa comunicativa?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você tem experiência e/ou facilidade em falar em público?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você tem experiência na sua área de atuação?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: 'Você consegue aplicar seus conhecimentos com destreza?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Perguntas', null, {})
  }
}
