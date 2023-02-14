import { FormEvent } from 'react';
import { api } from '../lib/axios';

export const autenticacaoLoginCandidato = async (
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
    .post('usuario/login/candidato', {
      email,
      senha,
    })
    .then((res) => {
      if (res.data.erro) {
        setError(res.data.mensagem);
        console.log('ENTROU AQUI 1');
      } else {
        console.log('ENTROU AQUI');
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('token', res.data.token);
        setCanNavigate(true);
      }
    });
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
