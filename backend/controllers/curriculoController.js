const models = require('../models');
const {
  jsonCurriculoExperiencia,
  jsonCurriculosCursos,
  jsonCurriculosIdiomas,
  jsonCursos,
  jsonExperiencia,
  jsonIdiomas,
} = require('../utils/curriculos/jsonCurriculos');
const { campos, getJSON } = require('../utils/curriculos');

const createItensModels = async (req, valueBody, model, value, candidato) => {
  const getModel = models[`${model}`];
  console.log(valueBody);
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
};

module.exports = curriculo;
