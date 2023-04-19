import { api } from './baseURL';

export const createCandidato = async (
  perfil: string,
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
  descricao: string
) => {
  const response = await api.post('/usuario/cadastro/candidatos', {
    perfil,
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
    descricao,
  });

  return { ok: response.statusText };
};
