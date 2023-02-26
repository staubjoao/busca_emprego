import { toJS } from 'mobx';
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

  console.log('RESPONSE', response);

  return { ok: response.statusText };
};
