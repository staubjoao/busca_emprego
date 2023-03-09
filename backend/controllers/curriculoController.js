const models = require('../models');
const { campos, getJSON } = require('../utils/curriculos');
const { sequelize } = require('../models');
const { query } = require('express');

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
    const curriculovaga = models.CurriculosVagas
    const candidato = models.Curriculo

    await curriculovaga
      .findAll({
        where: { VagaId: req.params.idVaga },
        include: [
          {
            model: candidato,
            required: true
          }
        ]
      })
      .then(curriculos => res.json({ curriculos }))
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: erro
        })
      })
  },
};

module.exports = curriculo;
