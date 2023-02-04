import { api } from './baseURL';

export const createCurriculo = async (
  idCandidato: string,
  experiences: Array<any>,
  idiomas: Array<any>,
  cursos: Array<any>
) => {
  const response = await api.post(`/usuario/curriculo/${idCandidato}`, {
    experiencias: experiences,
    idiomas: idiomas,
    cursos: cursos,
  });

  return { ok: response.statusText };
};
