import { TelaInicial } from '../components/TelaInicial'
import { Route, Routes } from 'react-router-dom'
import { LoginCandidato } from '../components/LoginCandidato'
import { LoginEmpresa } from '../components/LoginEmpresa'

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
    </Routes>
  )
}
