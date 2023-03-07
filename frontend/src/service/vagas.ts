import { api } from '../lib/axios';
import { FormEvent } from 'react';

export const getVagasEmpresa = async () => {
  const response = await api.get('usuario/empresa/vagas/'+2);
  return response.data.vagas;
};

export const getVagasCandidato = async () => {
  const response = await api.get('usuario/candidato/vagas');
  return response.data.vagas;
};

export const toggleVaga = async (id:number, visualizar:boolean) => {
  const response = await api.put('usuario/empresa/vagas/toggle', {
    id,
    visualizar
  })
  return response.data.newVisualizar
}

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
    .post('usuario/alterar/vaga', {
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
