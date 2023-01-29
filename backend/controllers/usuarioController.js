const models = require('../models')
const jwt = require('jsonwebtoken')

//controller de usuario

const usuarioController = {
  cadastro: (req, res) => {
    res.send('Cadastro')
  },

  loginCandidato: async (req, res) => {
    const candidato = models.Curriculo

    let usuario = await candidato.findOne({
      where: {
        email: req.body.email,
        senha: req.body.senha
      }
    })

    if (!usuario)
      res.status(400).send({ erro: true, message: 'email ou senha inválido' })

    const token = jwt.sign(
      { _id: usuario._id },
      process.env.TOKEN_SECRET_CANDIDATO
    )

    res.header('authorization-token', token)
    res.send('Logado')
  },

  loginEmpresa: async (req, res) => {
    const empresa = models.Empresa

    let usuario = await empresa.findOne({
      where: {
        email: req.body.email,
        senha: req.body.senha
      }
    })

    if (!usuario)
      res.status(400).send({ erro: true, message: 'email ou senha inválido' })

    const token = jwt.sign(
      { _id: usuario._id },
      process.env.TOKEN_SECRET_EMPRESA
    )

    res.header('authorization-token', token)
    res.send('Logado')
  }
}

module.exports = usuarioController
