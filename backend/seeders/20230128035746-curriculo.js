'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Curriculos', [
      {
        id:1,
        perfil: null,
        email: 'jucivanio1983@gmail.com',
        senha: 'senha123',
        nome: 'Jucivanio',
        cpf: '12954455418',
        endereco: 'Rua João Inácio',
        bairro: 'Zona 1',
        cidade: 'Maringá',
        estado: 'PR',
        pais: 'Brasil',
        numero: 1202,
        complemento: null,
        telefone: '999547972',
        sexo: 'M',
        genero: 'O',
        deficiencia: false,
        cep: '93517721',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        perfil:
          'https://i.pinimg.com/736x/a9/1e/a7/a91ea7eb629e95ab7f23e4088c09587f.jpg',
        email: 'anivalda1977@gmail.com',
        senha: 'senha123',
        nome: 'Anivalda',
        cpf: '62129788490',
        endereco: 'Travessa Ana Beatriz',
        bairro: 'Zona 4',
        cidade: 'Maringá',
        estado: 'PR',
        pais: 'Brasil',
        numero: 6720,
        complemento: 'apartamento nº 501',
        telefone: '994730066',
        sexo: 'F',
        genero: 'F',
        deficiencia: true,
        cep: '07076247',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Curriculos', null, {})
  }
}
