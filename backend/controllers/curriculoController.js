const models = require('../models');
const { campos, getJSON } = require('../utils/curriculos');
const curriculoVaga = models.CurriculosVagas;
const vaga = models.Vaga;
const candidatoModel = models.Curriculo;

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

    try {
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
      const findEmptyItem = itemsModels.find((item) => item.length === 0);
      if (findEmptyItem) {
        return res.json({
          message: 'Há campos vazios!',
          ok: false,
        });
      }
      return res.json({
        message: 'Currículo salvo com sucesso!',
        ok: true,
      });
    } catch (e) {
      console.log('ERRP', e);
      return res.json({
        message: 'Que pena, algo deu errado :(',
        ok: false,
      });
    }
  },

  listarCurriculos: async (req, res) => {
    const { idVaga } = req.params;
    const curriculo = models.Curriculo;
    const vaga = models.Vaga;
    const teste = models.CurriculoVaga;

    await curriculo
      .findByPk(req.params.idVaga, {
        include: [
          {
            all: true,
            association: 'CurriculosVagas',
          },
        ],
      })
      .then((curr) => {
        return res.json({ curr });
      })
      .catch((erro) => {
        return res.status(400).json({
          erro: true,
          message: erro,
        });
      });
  },

  candidatar: async (req, res) => {
    const { idVaga, idCandidato } = req.body;

    let vagaExists = await vaga.findOne({
      where: {
        id: idVaga,
      },
    });

    let candidatoExists = await candidatoModel.findOne({
      where: {
        id: idCandidato,
      },
    });

    if (!vagaExists) {
      return res.json({ ok: false, data: 'Vaga não existe no banco' });
    }

    if (!candidatoExists) {
      return res.json({ ok: false, data: 'Candidato(a) não existe no banco' });
    }

    let alreadyCandidato = await curriculoVaga.findOne({
      where: {
        VagaId: idVaga,
        CurriculoId: idCandidato,
      },
    });

    if (alreadyCandidato) {
      return res.json({
        ok: false,
        data: 'Candidato(a) já se candidatou à vaga',
      });
    }

    try {
      const response = await curriculoVaga.create({
        VagaId: idVaga,
        CurriculoId: idCandidato,
      });

      res.json({ ok: true, data: response });
    } catch (e) {
      res.status(500);
      return res.json({
        data: e,
        ok: false,
      });
    }
  },
};

module.exports = curriculo;
