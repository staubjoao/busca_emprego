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

export const getCurriculosVaga = async (idVaga: string, token: string) => {
  const response = await api.get(
    `usuario/empresa/vaga/curriculos/${idVaga}`,
    {
      headers: {
        'authorization-token': token,
      },
    }
    );
  return response.data.curriculos;
};

export const getCurriculo = async(idCurriculo: string, token: string) => {
  const response = await api.get(
    `usuario/empresa/curriculo/${idCurriculo}`,
    {
      headers: {
        'authorization-token': token,
      },
    }
    );
  return response.data.curriculo;
}
