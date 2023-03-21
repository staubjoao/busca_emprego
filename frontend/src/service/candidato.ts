import { api } from './baseURL';

export const createCandidato = async (
  email: string,
  senha: string,
  nome: string,
  cpf: string,
  endereco: string,
  bairro: string,
  cidade: string,
  estado: string,
  pais: string,
  numero: string,
  complemento: string,
  telefone: string,
  genero: string,
  deficiencia: string,
  cep: string,
  areaAtuacao: string,
  pretensao: string,
) => {
  const response = await api.post('/usuario/cadastro/candidatos', {
    email,
    senha,
    nome,
    cpf,
    endereco,
    bairro,
    cidade,
    estado,
    pais,
    numero,
    complemento,
    telefone,
    genero,
    deficiencia,
    cep,
    areaAtuacao,
    pretensao,
  });

  return { ok: response.statusText };
};
