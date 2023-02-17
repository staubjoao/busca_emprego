import { api } from '../lib/axios';

export const cadastroCandidato = async (
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
  sexo: string,
  genero: string,
  deficiencia: string,
  cep: string
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
    sexo,
    genero,
    deficiencia,
    cep,
  });

  return response;
};