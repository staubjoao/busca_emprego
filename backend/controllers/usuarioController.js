const models = require('../models')
const jwt = require('jsonwebtoken')
//const { sequelize } = require('../models') coisa do select em tempos sombrios

const empresa = models.Empresa
const vaga = models.Vaga

const usuarioController = {
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
        where: { id: req.params.id },
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
  }
}

module.exports = usuarioController
