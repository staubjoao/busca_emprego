import { FormEvent } from 'react';
import { api } from '../lib/axios';

export const autenticacaoLoginCandidato = async (
  e: FormEvent,
  email: string,
  senha: string,
  setError: (error: string) => void,
  setCanNavigate: (canNavigate: boolean) => void
) => {
  e.preventDefault();

  if (email === '' || senha === '') {
    return;
  }

  await api
    .post('usuario/login/candidato', {
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

export const autenticacaoLoginEmpresa = async (
  e: FormEvent,
  cnpj: string,
  senha: string,
  setError: (error: string) => void,
  setCanNavigate: (canNavigat: boolean) => void
) => {
  e.preventDefault();

  if (cnpj === '' || senha === '') {
    return;
  }

  await api
    .post('usuario/login/empresa', {
      cnpj,
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
