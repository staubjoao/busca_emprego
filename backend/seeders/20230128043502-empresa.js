'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Empresas', [
      {
        logo: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg?w=2000',
        email: 'google@gmail.com',
        senha: 'uRyBdXS7PM',
        nome: 'Google',
        endereco: 'Av. Brigadeiro Faria Lima',
        bairro: 'Jardim Europa',
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil',
        numero: 3477,
        complemento: null,
        telefone: '(43) 2157-6801',
        ramo: 'Serviços online e software',
        cnpj: '23.192.009/0001-47',
        cep: '04538133',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        logo: null,
        email: 'transportestocantins@gmail.com',
        senha: 'RGshM9KLho',
        nome: 'TOCANTINS TRANSPORTE E TURISMO LTDA - EPP',
        endereco: 'Avenida Anísio da Luz',
        bairro: 'Ipueiras',
        cidade: 'Picos',
        estado: 'PI',
        pais: 'Brasil',
        numero: 7927,
        complemento: 'sala nº 3001',
        telefone: '(95) 3162-9208',
        ramo: 'Transportes e armazenagem atividades de informação e comunicação',
        cnpj: '52.710.901/0001-70',
        cep: '64604090',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empresas', null, {})
  }
}
