import { api } from '../lib/axios';

export const getVagas = async () => {
  const response = await api.get('usuario/listar/vagas', {});

  return response.data.vagas;
};
