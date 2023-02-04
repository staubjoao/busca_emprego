import { api } from './baseURL';

export const createCurriculo = (
  idCandidato: string,
  experiences: Array<any>,
  idiomas: Array<any>,
  cursos: Array<any>
) => {
  api
    .post(`/usuario/curriculo/${idCandidato}`, {
      experiences,
      idiomas,
      cursos,
    })
    .then((response) => {
      return { ok: true, data: response.data };
    })
    .catch((e) => {
      return { ok: false, error: e };
    });
};
