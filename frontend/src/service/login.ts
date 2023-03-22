import { FormEvent } from 'react';
import { api } from '../lib/axios';
import { useNavigate } from 'react-router-dom'

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

  if (cnpj === '' || senha === '') {
    return;
  }

  const response = await api.post('usuario/login/empresa', {
    cnpj,
    senha,
  });

  return response;
};
