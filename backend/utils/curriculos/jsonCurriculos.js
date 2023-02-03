export const jsonCurriculoExperiencia = (model, candidato) => ({
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

export const jsonExperiencia = (model) => ({
  id: model.id,
  empresa: model.empresa,
  endereco: model.endereco,
  ramo: model.ramo,
});

export const jsonIdiomas = (model) => ({
  id: model.id,
  idioma: model.idioma,
});

export const jsonCurriculosIdiomas = (model, candidato) => ({
  CurriculoId: candidato.id,
  IdiomaId: model.id,
  nivel: model.nivel,
});

export const jsonCurriculosCursos = (model, candidato) => ({
  inicio: model.inicio,
  termino: model.termino,
  CurriculoId: candidato.id,
  CursoId: model.id,
});

export const jsonCursos = (model) => ({
  id: model.id,
  curso: model.curso,
});
