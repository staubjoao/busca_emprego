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

export const autenticacaoLoginEmpresa = async (
  e: FormEvent,
  email: string,
  senha: string,
  setError: (error: string) => void,
  setCanNavigate: (canNavigat: boolean) => void
) => {
  e.preventDefault();

  if (email === '' || senha === '') {
    return;
  }

  await api
    .post('usuario/login/empresa', {
      email,
      senha,
    })
    .then((res) => {
      if (res.data.erro) {
        setError(res.data.mensagem);
      } else {
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('token', res.data.token);
        setCanNavigate(true);
      }
    });
};
