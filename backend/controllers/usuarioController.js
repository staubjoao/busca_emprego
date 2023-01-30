const models = require('../models')
const jwt = require('jsonwebtoken')

let empresa = models.Empresa
let candidato = models.Curriculo

//controller de usuario

const usuarioController = {
  cadastroEmpresa: async(req, res) => {
    await empresa.create(
      req.body
    ).then(() => {
      return res.json({
        error: false,
        message: "Empresa criada com sucesso."
      })
    }).catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Falha na criação da empresa."
      })
    })
  },

  cadastroCandidato: async(req, res) => {
    await candidato.create(
      req.body
    ).then(() => {
      return res.json({
        error: false,
        message: "Candidato(a) criado(a) com sucesso."
      })
    }).catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Falha na criação do(a) candidato(a)."
      })
    })
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
