import {
  jsonCurriculoExperiencia,
  jsonCurriculosCursos,
  jsonCurriculosIdiomas,
  jsonCursos,
  jsonExperiencia,
  jsonIdiomas,
} from './jsonCurriculos';

export const getJSON = (value, model, candidato) => {
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
