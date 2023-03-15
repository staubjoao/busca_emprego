import { TelaInicial } from '../screens/TelaInicial'
import { Route, Routes } from 'react-router-dom'

import {
  CadastroCandidato,
  CadastroEmpresa,
  CadastroVaga,
  ListagemCurriculos,
  ListagemCurriculoCompleto,
  ListagemVagasCandidato,
  LoginCandidato,
  LoginEmpresa,
  CadastroCurriculo
} from '../screens'
import { ListagemVagasEmpresa } from '../screens/Vagas/ListagemVagasEmpresa'
import { AlterarVaga } from '../screens/Vagas/AlteraçãoVaga'

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
      <Route path="candidato/:id/curriculo" element={<CadastroCurriculo />} />
      <Route path="candidato/vagas" element={<ListagemVagasCandidato />} />
      <Route path="empresa/vagas/:id" element={<ListagemVagasEmpresa />} />
      <Route path="empresa/curriculos" element={<ListagemCurriculos />} />
      <Route path="empresa/curriculo/:id" element={<ListagemCurriculoCompleto />} />
      <Route path="empresa/cadastro/vaga" element={<CadastroVaga />} />
      <Route path="empresa/alterar/vaga/:id" element={<AlterarVaga />} />
    </Routes>
  )
}
