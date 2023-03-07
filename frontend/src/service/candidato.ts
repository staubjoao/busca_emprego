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
  cep: string
) => {
  console.log('ENTROU');
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
    cep
  });

  console.log('RESPONSE', response);

  return { ok: response.statusText };
};
