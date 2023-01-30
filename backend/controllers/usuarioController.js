const models = require('../models')
const jwt = require('jsonwebtoken')

//controller de usuario

const usuarioController = {
  cadastro: (req, res) => {
    res.send('Cadastro')
  },

  loginCandidato: async (req, res) => {
    console.log('ENTROU AUQI')
    const candidato = models.Curriculo

    let usuario = await candidato.findOne({
      where: {
        email: req.body.email,
        senha: req.body.senha
      }
    })

    if (!usuario)
      return res.send({ erro: true, mensagem: 'Email ou senha inválido' })

    const token = jwt.sign(
      { _id: usuario._id },
      process.env.TOKEN_SECRET_CANDIDATO
    )
    res.header('authorization-token', token)
    res.send('LOGADO')
  },

  loginEmpresa: async (req, res) => {
    const empresa = models.Empresa

    let usuario = await empresa.findOne({
      where: {
        cnpj: req.body.cnpj,
        senha: req.body.senha
      }
    })

    if (!usuario)
      return res.send({ erro: true, mensagem: 'Cnpj ou senha inválido' })

    const token = jwt.sign(
      { _id: usuario._id },
      process.env.TOKEN_SECRET_EMPRESA
    )

    res.header('authorization-token', token)
    res.send('LOGADO')
  }
}

module.exports = usuarioController
