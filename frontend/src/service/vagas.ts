import { api } from '../lib/axios';
import { FormEvent } from 'react';

export const getVagasCandidato = async (token: string) => {
  const response = await api.get('usuario/candidato/vagas', {
    headers: {
      'authorization-token': token,
    },
  });

  return response.data.vagas;
};

export const getVagasEmpresa = async (id: string, token: string) => {
  const response = await api.get('usuario/empresa/vagas/'+id, {
    headers: {
      'authorization-token': token,
    },
  });
  return response.data.vagas;
};

export const getInfoVaga = async (id: string, token: string) => {
  const response = await api.get('usuario/empresa/exibir/vaga/' + id, {
    headers: {
      'authorization-token': token,
    },
  });
  return response.data.vagas;
};

export const toggleVaga = async (id: number, visualizar: number) => {
  const response = await api.put('usuario/empresa/vagas/toggle', {
    id,
    visualizar,
  });
  return response.data;
};

export async function cadastroVaga(
  e: FormEvent,
  titulo: string,
  periodo: string,
  descricao: string,
  salario: number,
  EmpresaId: string | null,
  setError: (error: string) => void,
  setCanNavigate: (canNavigat: boolean) => void
) {
  e.preventDefault();

  if (titulo === '' || periodo === '' || descricao === '') {
    return;
  }

  await api
    .post('usuario/cadastro/vaga', {
      titulo,
      periodo,
      salario,
      descricao,
      EmpresaId,
    })
    .then((res) => {
      if (res.data.erro) {
        setError(res.data.mensagem);
      } else {
        setCanNavigate(true);
      }
    });
}

export async function alteracaoVaga(
  idVaga: any,
  e: FormEvent,
  titulo: string,
  periodo: string,
  descricao: string,
  salario: number,
  EmpresaId: string | null,
  setError: (error: string) => void
) {
  e.preventDefault();

  if (titulo === '' || periodo === '' || descricao === '') {
    return;
  }

  await api
    .put('usuario/alterar/vaga/' + idVaga, {
      titulo,
      periodo,
      salario,
      descricao,
      EmpresaId,
    })
    .then((res) => {
      if (res.data.erro) {
        setError(res.data.mensagem);
      }
    });
}

export async function exibirVaga(id: Number) {
  const response = await api.get('/usuario/candidato/vagas/' + id);
  return response.data.vaga;
}
