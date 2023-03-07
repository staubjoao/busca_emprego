const models = require('../models')

const vaga = models.Vaga
const empresa = models.Empresa

//controller de Vaga

const vagaController = {
  cadastroVaga: async (req, res) => {
    await vaga
      .create(req.body)
      .then(() => {
        return res.json({
          error: false,
          message: 'Vaga criada com sucesso!'
        })
      })
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: erro
        })
      })
  },

  listarVagas: async (req, res) => {
    const usuario = await empresa.findOne({
      where: {
        id: req.params.idEmpresa
      }
    })

    if (!usuario)
      return res.json({ erro: true, mensagem: 'Ops... houve um erro!' })

    await vaga
      .findAll({
        where: { EmpresaId: usuario.id },
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

  toggleVaga: async (req, res) => {
    const newVisualizar = req.body.visualizar == true ? 0 : 1

    await vaga
      .update(
        { visualizar: newVisualizar },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(vaga =>
        res.json({
          error: false,
          message: 'Alterado com sucesso',
          newVisualizar: newVisualizar
        })
      )
      .catch(error => {
        return res.status(400).json({
          error: true,
          message: error
        })
      })
  },

  alterarVaga: async (req, res) => {
    vaga
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(vaga =>
        res.json({
          error: false,
          message: 'Alterado com sucesso',
          vaga: vaga
        })
      )
      .catch(error => {
        return res.status(400).json({
          error: true,
          message: error
        })
      })
  }
}

module.exports = vagaController
