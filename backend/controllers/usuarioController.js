const models = require('../models')

//controller de usuario

const usuarioController = {
  cadastro: (req, res) => {
    res.send('Cadastro')
  },

  login: async (req, res) => {
    res.send('Login')
  }
}

module.exports = usuarioController
