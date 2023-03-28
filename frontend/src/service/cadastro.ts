import { FormEvent } from 'react';
import {api} from './baseURL'

export async function cadastroEmpresa(
  e: FormEvent,
  email: string,
  senha: string,
  nome: string,
  ramo: string,
  cnpj: string,
  pais: string,
  cep: string,
  estado: string,
  cidade: string,
  endereco: string,
  numero: string,
  bairro: string,
  complemento: string,
  telefone: string
) {
  e.preventDefault();

  const response = await api.post('/usuario/cadastro/empresas', {
    email,
    senha,
    nome,
    ramo,
    cnpj,
    pais,
    cep,
    estado,
    cidade,
    endereco,
    numero,
    bairro,
    complemento,
    telefone,
  });

  return response;
}
