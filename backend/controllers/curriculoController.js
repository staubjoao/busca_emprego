const models = require('../models');
const { campos, getJSON } = require('../utils/curriculos');

const createItensModels = async (req, valueBody, model, value, candidato) => {
  const getModel = models[`${model}`];

  const promises = await Promise.all(
    req.body[`${valueBody}`].map((itemModel) =>
      getModel.create(getJSON(value, itemModel, candidato))
    )
  );

  return promises;
};

const curriculo = {
  createCurriculo: async (req, res) => {
    const { idCandidato } = req.params;
    const curriculos = models.Curriculo;
    let candidato = await curriculos.findOne({
      where: {
        id: idCandidato,
      },
    });

    const itemsModels = await Promise.all(
      campos.map(async (item) => {
        return await createItensModels(
          req,
          item.valueBody,
          item.model,
          item.value,
          candidato
        );
      })
    );
    return res.json(itemsModels);
  },

  listarCurriculos: async (req, res) => {
    const { idVaga } = req.params;
    const curriculo = models.Curriculo;
    const vaga = models.Vaga;
    const teste = models.CurriculoVaga;

    await curriculo.findByPk(req.params.idVaga, {
      include: [{
        all: true,
        association: 'CurriculosVagas',
      }]
    })
      .then(curr => {
        return res.json({ curr });
      }).catch(erro => {
        return res.status(400).json({
          erro: true,
          message: erro
        })
      })

    // await vaga.findAll(
    //   {
    //     where: { id: idVaga },
    //     include: [
    //       {
    //         model: curriculo, 
    //         association: 'CurriculosVagas',
    //         require: true,
    //         attributes: ['nome', 'email']
    //       }
    //     ]
    //   }
    // ).then(curriculos => res.json({ curriculos }))
    //   .catch(erro => {
    //     return res.status(400).json({
    //       erro: true,
    //       message: erro
    //     })
    //   })
  },
};

module.exports = curriculo;
