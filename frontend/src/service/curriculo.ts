import { api } from './baseURL';

export const createCurriculo = async (
  token: string,
  idCandidato: string,
  experiences: Array<any>,
  idiomas: Array<any>,
  cursos: Array<any>
) => {
  const response = await api.post(
    `/usuario/curriculo/${idCandidato}`,
    {
      experiencias: experiences,
      idiomas: idiomas,
      cursos: cursos,
    },
    {
      headers: {
        'authorization-token': token,
      },
    }
  );

  return { ok: response.statusText };
};
