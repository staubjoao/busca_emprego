import { api } from './baseURL';

export const createCurriculo = async (
  idCandidato: string,
  experiences: Array<any>,
  idiomas: Array<any>,
  cursos: Array<any>
) => {
  console.log(idCandidato, experiences, idiomas, cursos);
  const tes = await api.post(`/usuario/curriculo/${idCandidato}`, {
    experiencias: experiences,
    idiomas: idiomas,
    cursos: cursos,
  });
  console.log('TEST', tes);
};
