import { TelaInicial } from '../components/TelaInicial'
import { Route, Routes } from 'react-router-dom'
import { LoginCandidato } from '../components/LoginCandidato'
import { LoginEmpresa } from '../components/LoginEmpresa'
import { CadastroEmpresa } from '../components/CadastroEmpresa'
import { CadastroCandidato } from '../components/CadastroCandidato'
import { ListagemCurriculos } from '../components/ListagemCurriculos'
import { ListagemVagas } from '../components/ListagemVagas'
import { CadastroVaga } from '../components/CadastroVaga'

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
      <Route path="candidato/vagas" element={<ListagemVagas />} />
      <Route path="empresa/curriculos" element={<ListagemCurriculos />} />
      <Route path="empresa/cadastro/vaga" element={<CadastroVaga />} />
    </Routes>
  )
}
