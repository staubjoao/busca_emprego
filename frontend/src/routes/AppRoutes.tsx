import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useStore } from '../hooks/stores'

import {
  CadastroCandidato,
  CadastroEmpresa,
  CadastroVaga,
  ListagemCurriculos,
  CadastroCurriculo,
  ListagemVagasCandidato
} from '../screens'
import { ListagemVagasEmpresa } from '../screens/Vagas/ListagemVagasEmpresa'

export function AppRoutes() {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  return (
    <>
      <Sidebar typeUser={loginStore.typeUser} navigate={navigate} />
      <Routes>
        <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
        <Route path="cadastro/candidato" element={<CadastroCandidato />} />
        <Route path="candidato/:id/curriculo" element={<CadastroCurriculo />} />
        <Route path="candidato/vagas" element={<ListagemVagasCandidato />} />
        <Route path="empresa/curriculos" element={<ListagemCurriculos />} />
        <Route path="empresa/vagas/:id" element={<ListagemVagasEmpresa />} />
        <Route path="empresa/cadastro/vaga" element={<CadastroVaga />} />
      </Routes>
    </>
  )
}
