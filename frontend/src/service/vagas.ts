import { api } from '../lib/axios';
import { FormEvent } from 'react';

export const getVagas = async (token: string) => {
  const response = await api.get('usuario/listar/vagas', {
    headers: {
      'authorization-token': token,
    },
  });

  return response.data.vagas;
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
