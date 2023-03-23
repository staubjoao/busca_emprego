import IMaskInput from 'react-input-mask'
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { cadastroVaga } from '../../../service/vagas'
import { useStore } from '../../../hooks/stores'
import { observer } from 'mobx-react-lite'

export const CadastroVaga = observer(() => {
  const { loginStore, vagaStore } = useStore()
  const navigate = useNavigate()
  const {
    setErro,
    titulo,
    periodo,
    salario,
    descricao,
    setCanNavigate,
    canNavigate,
    setTitulo,
    setSalario,
    setDescricao,
    setPeriodo
  } = vagaStore

  const handleVaga = async (e: FormEvent) => {
    vagaStore.handleCreateVaga(
      loginStore.token,
      e,
      titulo,
      periodo,
      descricao,
      salario,
      loginStore.user.id,
      setErro,
      setCanNavigate
    )
    canNavigate && navigate('/empresa/vagas/' + loginStore.user.id)
  }

  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white m-3.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="container mx-auto max-w-lg mb-16">
        <h2 className="text-white text-2xl mt-6">
          Cadastre uma vaga e encontre os melhores currículos
        </h2>
        <h3 className="text-gray-300 mt-4">
          Preencha o formulário de vagas abaixo
        </h3>
      </div>
      <div className="bg-stone-100 h-vh-77">
        <div className="container mx-auto max-w-lg p-8 bg-white rounded-lg mt-10 relative bottom-10">
          <form className="ml-2" onSubmit={handleVaga}>
            <h4 className="text-xl font-semibold">Dados da Vaga</h4>

            <hr className="mt-2" />

            <div className="mt-4">
              <label className="text-gray-500 text-sm" htmlFor="titulo">
                Título
              </label>
              <input
                className="bg-stone-100 rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                type="text"
                id="titulo"
                onChange={event => setTitulo(event.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="text-gray-500 text-sm" htmlFor="periodo">
                Período
              </label>
              <input
                className="bg-stone-100 rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                type="text"
                id="periodo"
                onChange={event => setPeriodo(event.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="text-gray-500 text-sm" htmlFor="salario">
                Salário
              </label>
              <IMaskInput
                className="bg-stone-100 rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                mask="R$ 99999999999"
                id="salario"
                maskChar={''}
                onChange={event =>
                  setSalario(parseFloat(event.target.value.slice(3)))
                }
              />
            </div>

            <div className="mt-4">
              <label className="text-gray-500 text-sm" htmlFor="descricao">
                Descrição
              </label>
              <textarea
                className="bg-stone-100 rounded border w-full p-1 h-64 focus:outline-none focus:ring-2 focus:ring-background1"
                id="descricao"
                value={descricao}
                onChange={event => setDescricao(event.target.value)}
              />
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-background1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                <span className="text-gray-500 text-sm ml-2">
                  Importante! <br /> Preencha todos os dados
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-background1 text-white py-2.5 px-6 rounded-lg text-sm"
                >
                  Salvar Vaga
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})
