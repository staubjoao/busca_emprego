import { TelaInicial } from '../components/TelaInicial'
import { Route, Routes } from 'react-router-dom'
import { LoginCandidato } from '../components/LoginCandidato'
import { LoginEmpresa } from '../components/LoginEmpresa'
import { CadastroEmpresa } from '../components/CadastroEmpresa'
import { CadastroCandidato } from '../components/CadastroCandidato'

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
    </Routes>
  )
}
