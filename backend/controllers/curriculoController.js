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
      return res.json(itemsModels);
    } catch (e) {
      res.status(500);
      return res.json({
        message: e,
        ok: false,
      });
    }
  },

  listarCurriculos: async (req, res) => {
    const curriculovaga = models.CurriculosVagas

    await curriculovaga
      .findAll({
        where: { VagaId: req.params.idVaga },
        include: [
          {
            model: models.Curriculo,
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

  listarCurriculo: async (req, res) => {
    console.log(req.params.idCurriculo)
    const curriculo = models.Curriculo
    const cursos = models.Cursos
    const experiencias = models.Experiencias
    const idiomas = models.Idiomas
    const idiomasCurriculo = models.CurriculosIdiomas
    const cursosCurriculo = models.CurriculosCursos
    const experienciasCurriculo = models.CurriculosExperiencias
    const instituicao = models.Instituicao
    const cursosInstituicoes = models.CursosInstituicoes

    await curriculo.findOne({
      where: { id: req.params.idCurriculo },
      include: [
        {
          model: idiomas,
          attributes: ['idioma'],
          through: {
            model: idiomasCurriculo,
            attributes: ['nivel']
          }
        },
        {
          model: cursos,
          attributes: ['curso'],
          through: {
            model: cursosCurriculo,
            attributes: ['inicio', 'termino'],
          },
          include: [
            {
              model: instituicao,
              attributes: ['nome', 'cidade', 'pais'],
              tableName: 'Instituicoes',
              through: {
                model: cursosInstituicoes,
              }
            }
          ]
        },
        {
          model: experiencias,
          attributes: ['empresa', 'endereco', 'ramo'],
          through: {
            model: experienciasCurriculo,
            attributes: ['inicio', 'termino', 'cidade', 'pais', 'salario', 'cargo']
          }
        }
      ]
    })
      .then(curriculo => res.json({ curriculo }))
      .catch(erro => {
        return res.status(400).json({
          error: true,
          message: erro
        })
      })
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
