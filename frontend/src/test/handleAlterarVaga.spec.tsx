//Teste alteração de vaga Nathalia Mesquita Carnevalli
//Ra 116086

import { render, screen } from '@testing-library/react'
import { AlterarVaga } from '../screens/Vagas/AlteraçãoVaga'
import { BrowserRouter } from 'react-router-dom'
import { alteracaoVagaTeste } from './stub/alteracaoVagaTeste'
import '@testing-library/jest-dom'

describe('AlterarVaga', () => {
  //Caso de teste 1:
  //(2)(5)(8)(11)(14)(17)
  //Deve retornar True
  it('Deve alterar a vaga corretamente - todas as variáveis corretas', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga React JS para programadores que são bons',
      periodo: 'De segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(true)
  })

  //Caso de teste 2:
  //(1)(5)(8)(11)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - titulo incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga',
      periodo: 'De segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 3:
  //(3)(5)(8)(11)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - titulo incorreto', () => {
    const data = {
      idVaga: '1',
      titulo:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      periodo: 'De segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 4:
  //(2)(4)(8)(11)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - periodo incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'algo',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 5:
  //(2)(6)(8)(11)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - periodo incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 6:
  //(2)(5)(7)(11)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - descricao incorreta', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao: 'Vaga',
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 7:
  //(2)(5)(9)(11)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - descricao incorreta', () => {
    let descricao = ''

    for (let i = 0; i < 1001; i++) {
      descricao += 'c'
    }

    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao: descricao,
      salario: 20000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 8:
  //(2)(5)(8)(12)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - salario incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 1000000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 9:
  //(2)(5)(8)(10)(14)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - salario incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 0,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })

  //Caso de teste 10:
  //(2)(5)(8)(11)(15)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - EmpresaId incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 1000,
      EmpresaId: '2',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })

  //Caso de teste 11:
  //(2)(5)(8)(11)(13)(17)
  //Deve retornar false
  it('Não deve alterar a vaga corretamente - Empresa não está logada EmpresaId incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 1000,
      EmpresaId: null,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 12:
  //(2)(5)(8)(11)(14)(18)
  //Deve retornar false
  it('Não deve alterar a vaga - token incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 1000,
      EmpresaId: '1',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo'
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
  //Caso de teste 13:
  //(2)(5)(8)(11)(14)(20)
  //Deve retornar false
  it('Não deve alterar a vaga - token incorreto', () => {
    const data = {
      idVaga: '1',
      titulo: 'Vaga programador full-stack',
      periodo: 'Segunda a sexta',
      descricao:
        'Vaga para programadores que se interessem em aprender sempre mais e entendem muito de vários assuntos',
      salario: 1000,
      EmpresaId: '1',
      token: ''
    }

    const result = alteracaoVagaTeste(
      data.idVaga,
      data.titulo,
      data.periodo,
      data.descricao,
      data.salario,
      data.EmpresaId,
      data.token
    )

    expect(result).toBe(false)
  })
})
