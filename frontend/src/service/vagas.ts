import { FormEvent } from 'react';
import { api } from './baseURL';

export async function cadastroVaga(
  token: string,
  e: FormEvent,
  titulo: string,
  periodo: string,
  descricao: string,
  salario: number,
  EmpresaId: string | null,
  setError: (error: string) => void,
  setCanNavigate: (canNavigate: boolean) => void
) {
  e.preventDefault();

  if (titulo === '' || periodo === '' || descricao === '') {
    return;
  }

  await api
    .post(
      'usuario/cadastro/vaga',
      {
        titulo,
        periodo,
        salario,
        descricao,
        EmpresaId,
      },
      {
        headers: {
          'authorization-token': token,
        },
      }
    )
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
  titulo: string,
  periodo: string,
  descricao: string,
  salario: number,
  EmpresaId: string | null,
  setError: (error: string) => void,
  setCanNavigate: (canNavigate: boolean) => void,
  token: string
) {

  if (titulo.length < 10 || titulo.length > 255){
    setError('O período não foi preenchido corretamente!')
    return;
  }

  if(periodo.length < 10 || periodo.length > 45){
    setError('O período não foi preenchido corretamente')
    return; 
  }
  
  if(descricao.length < 20 || descricao.length > 2000) {
    setError('A descrição não pode estar vazia')
    return;
  }

  if(salario === 0 || salario > 100000){
    setError('O salário está com um valor muito maior do que o permitido')
    return;
  }

  if(EmpresaId === null){
    setError('Ops... houve um erro, tente novamente mais tarde :(')
    return;
  }

  await api
    .put(
      'usuario/alterar/vaga/' + idVaga,
      {
        titulo,
        periodo,
        salario,
        descricao,
        EmpresaId,
      },
      {
        headers: {
          'authorization-token': token,
        },
      }
    )
    .then((res) => {
      if (res.data.erro) {
        setError(res.data.mensagem);
      } else {
        setCanNavigate(true);
      }
    });
}

export async function exibirVagaCandidato(id: string, token: string) {
  const response = await api.get('/usuario/candidato/vagas/' + id, {
    headers: {
      'authorization-token': token,
    },
  });
  return response.data.vagas;
};

export const exibirVagaEmpresa = async (id: string, token: string) => {
  const response = await api.get('usuario/empresa/exibir/vaga/' + id, {
    headers: {
      'authorization-token': token,
    },
  });
  return response.data.vagas;
};

export const listarVagasEmpresa = async (id: string, token: string) => {
  const response = await api.get('usuario/empresa/vagas/' + id, {
    headers: {
      'authorization-token': token,
    },
  });
  return response.data.vagas;
};

export const listarVagasCandidato = async (token: string) => {
  const response = await api.get('usuario/candidato/vagas', {
    headers: {
      'authorization-token': token,
    },
  });

  return response.data.vagas;
};

export const toggleVaga = async (
  id: string,
  visualizar: number,
  token: string
) => {
  const response = await api.put(
    'usuario/empresa/vagas/toggle/'+id,
    {
      id,
      visualizar,
    },
    {
      headers: {
        'authorization-token': token,
      },
    }
  );
  return response.data;
};

export async function candidatar(
  idVaga: string,
  idCandidato: string,
  token: string
) {
  const response = await api.post(
    `/usuario/candidatar`,
    {
      idVaga,
      idCandidato,
    },
    {
      headers: {
        'authorization-token': token,
      },
    }
  );

  return response.data;
}
