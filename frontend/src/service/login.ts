import { FormEvent } from 'react';
import { api } from '../lib/axios';

export const autenticacaoLoginCandidato = async (
  email: string,
  senha: string
) => {
  if (email === '' || senha === '') {
    return;
  }

  const response = await api.post('usuario/login/candidato', {
    email,
    senha,
  });

  return response;
};

export const autenticacaoLoginEmpresa = async (cnpj: string, senha: string) => {
  console.log('CNPJ', cnpj);

  if (cnpj === '' || senha === '') {
    return;
  }

  const response = await api.post('usuario/login/empresa', {
    cnpj,
    senha,
  });

  console.log('RESPONSE', response);

  return response;
};
