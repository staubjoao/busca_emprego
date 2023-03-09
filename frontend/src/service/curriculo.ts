import { api } from './baseURL';

export const createCurriculo = async (
  idCandidato: string,
  experiences: Array<any>,
  idiomas: Array<any>,
  cursos: Array<any>
) => {
  console.log('ENTROU');
  const response = await api.post(`/usuario/curriculo/${idCandidato}`, {
    experiencias: experiences,
    idiomas: idiomas,
    cursos: cursos,
  });

  console.log('RESPONSE', response);

  return { ok: response.statusText };
};

export const getCurriculosVaga = async (IdVaga: string) => {
  const response = await api.get(`usuario/vagas/${IdVaga}/curriculos`);
  return response.data.curriculos;
};
