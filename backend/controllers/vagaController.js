const models = require('../models');
const jwt = require('jsonwebtoken');

const vaga = models.Vaga;
const empresa = models.Empresa

//controller de Vaga

const vagaController = {

  cadastroVaga: async (req, res) => {
     await vaga
       .create(req.body)
       .then(() => {
         return res.json({
           error: false,
           message: 'Vaga criada com sucesso!',
         });
       })
       .catch((erro) => {
         return res.status(400).json({
           error: true,
           message: erro,
         });
       });
  },

  listarVagas: async (req, res) => {
    await vaga.findAll({
      include: [{
        model: empresa,
        required: true,
        attributes: ["nome", "logo"]
      }]
    }).then((vagas) => res.json({ vagas }))
        .catch((erro) => {
          return res.status(400).json({
            error: true,
            message: erro,
          });
        });
    },
};

module.exports = vagaController;
