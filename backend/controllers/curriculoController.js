const models = require('../models');

const jsonCurriculoExperiencia = (model, candidato) => ({
  id: model.id,
  inicio: model.inicio,
  termino: model.termino,
  cidade: candidato.cidade,
  pais: candidato.pais,
  salario: model.salario,
  cargo: model.cargo,
  ExperienciaId: model.id,
  CurriculoId: candidato.id,
});

const jsonExperiencia = (model) => ({
  id: model.id,
  empresa: model.empresa,
  endereco: model.endereco,
  ramo: model.ramo,
});

const jsonIdiomas = (model) => ({
  id: model.id,
  idioma: model.idioma,
});

const jsonCurriculosIdiomas = (model, candidato) => ({
  CurriculoId: candidato.id,
  IdiomaId: model.id,
  nivel: model.nivel,
});

const jsonCurriculosCursos = (model, candidato) => ({
  inicio: model.inicio,
  termino: model.termino,
  CurriculoId: candidato.id,
  CursoId: model.id,
});

const jsonCursos = (model) => ({
  id: model.id,
  curso: model.curso,
});

const getJSON = (value, model, candidato) => {
  switch (value) {
    case 'curriculoExperiencias':
      return jsonCurriculoExperiencia(model, candidato);
    case 'experiencias':
      return jsonExperiencia(model);
    case 'idiomas':
      return jsonIdiomas(model);
    case 'curriculosIdiomas':
      return jsonCurriculosIdiomas(model, candidato);
    case 'cursos':
      return jsonCursos(model);
    case 'curriculosCursos':
      return jsonCurriculosCursos(model, candidato);
    default:
      console.log('nenhum');
  }
};

const returnChamadas = async (req, valueBody, model, value, candidato) => {
  const getModel = models[`${model}`];
  const promises = await Promise.all(
    req.body[`${valueBody}`].map((itemModel) =>
      getModel.create(getJSON(value, itemModel, candidato))
    )
  );

  return promises;
};

const campos = [
  {
    valueBody: 'experiencias',
    value: 'experiencias',
    model: 'Experiencias',
  },
  {
    valueBody: 'experiencias',
    value: 'curriculoExperiencias',
    model: 'CurriculosExperiencias',
  },
  {
    valueBody: 'idiomas',
    value: 'idiomas',
    model: 'Idiomas',
  },
  {
    valueBody: 'idiomas',
    value: 'curriculosIdiomas',
    model: 'CurriculosIdiomas',
  },
  {
    valueBody: 'cursos',
    value: 'cursos',
    model: 'Cursos',
  },
  {
    valueBody: 'cursos',
    value: 'curriculosCursos',
    model: 'CurriculosCursos',
  },
];

const curriculo = {
  createCurriculo: async (req, res) => {
    const { idCandidato } = req.params;
    const curriculos = models.Curriculo;
    let curriculo = await curriculos.findOne({
      where: {
        id: idCandidato,
      },
    });

    const body = await Promise.all(
      campos.map(async (item) => {
        return await returnChamadas(
          req,
          item.valueBody,
          item.model,
          item.value,
          curriculo
        );
      })
    );
    return res.json(body);
  },
};

module.exports = curriculo;
