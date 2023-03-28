 //Classes de equivalência:
    //(1) titulo.length < 10 ----- inválido
    //(2) titulo.length >= 10 || titulo.length <= 45 ----- válido
    //(3) titulo.length > 45 ----- inválido
    //(4) periodo.length < 10 ----- inválido
    //(5) periodo.length >= 10 || periodo.length <= 45 ----- válido
    //(6) periodo.length > 45 ----- inválido
    //(7) descricao.length < 20 ----- inválido
    //(8) descricao.length >= 20 || periodo.length <= 45 ----- válido
    //(9) descricao.length > 1000 ----- inválido
    //(10) salario <= 0 ----- inválido 
    //(11) salario >= 0 || salario <= 100000 ----- válido
    //(12) salario > 100000 ----- inválido
    //(13) EmpresaId === null ----- inválido
    //(14) EmpresaId === '1' ----- válido
    //(15) EmpresaId !== '1' ----- inválido
    //(16) token === '' ----- inválido
    //(17) token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8' ----- válido
    //(18) token !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo' ----- inválido
    //(19) está renderizando a tela ----- válido
    //(20) não está renderizando a tela ----- inválido
    //(21) o botão rediciona para a página correta ----- válido
    //(22) o botão não rediciona para a página correta ----- válido

import { put } from "./alteracaoVagaTesteBackend";

export const alteracaoVagaTeste =  (idVaga: any,
  titulo: string,
  periodo: string,
  descricao: string,
  salario: number,
  EmpresaId: string | null, token: string) => {
    
    if (titulo.length < 10 || titulo.length > 45){ 
      return false;
    }
    
    if(periodo.length < 10 || periodo.length > 45){ 
      return false; 
    }
    
    if(descricao.length < 20 || descricao.length > 1000) { 
      return false;
    }
    
    if(salario <= 0 || salario > 100000){ 
      return false;
    }
    
    return put(titulo,
      periodo,
      salario,
      descricao,
      EmpresaId, 
      token) ? true : false
    
}

