const models = require('../models')
const jwt = require('jsonwebtoken')
//const { sequelize } = require('../models') coisa do select em tempos sombrios

let empresa = models.Empresa
let candidato = models.Curriculo
const vaga = models.Vaga
const curriculovaga = models.CurriculosVagas

const usuarioController = {
  cadastroEmpresa: async (req, res) => {
    await empresa
      .create(req.body)
      .then(() => {
        return res.json({
          error: false,
          message: 'Empresa criada com sucesso.'
        })
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: 'Falha na criação da empresa.'
        })
      })
  },

  cadastroCandidato: async (req, res) => {
    await candidato
      .create(req.body)
      .then(() => {
        return res.json({
          error: false,
          message: 'Candidato(a) criado(a) com sucesso.'
        })
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: 'Falha na criação do(a) candidato(a).'
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
      return res.json({ erro: true, mensagem: 'Email ou senha inválido' })

    const token = jwt.sign(
      { _id: usuario._id, _cpf: usuario._cpf },
      process.env.TOKEN_SECRET_CANDIDATO
    )
    res.header('authorization-token', token)
    res.json({
      id: usuario.id,
      token: token
    })
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
      return res.json({ erro: true, mensagem: 'Cnpj ou senha inválido' })

    const token = jwt.sign(
      { _id: usuario._id, _cnpj: usuario._cnpj },
      process.env.TOKEN_SECRET_EMPRESA
    )

    res.header('authorization-token', token)
    res.json({
      id: usuario.id,
      token: token
    })
  },

  listarVagas: async (req, res) => {
    await vaga
      .findAll({
        where: { visualizar: true },
        include: [
          {
            model: empresa,
            required: true,
            attributes: ['nome', 'logo']
          }
        ]
      })
      .then(vagas => res.json({ vagas }))
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: erro
        })
      })
  },
  exibirDadosVaga: async (req, res) => {
    await vaga
      .findOne({
        where: { id: req.params.id }
      })
      .then(vagas => res.json({ vagas }))
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: erro
        })
      })
  }
}

module.exports = usuarioController
