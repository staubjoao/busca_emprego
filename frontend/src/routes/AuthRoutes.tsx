import { TelaInicial } from '../screens/TelaInicial';
import { Route, Routes } from 'react-router-dom';

import { LoginCandidato, LoginEmpresa, CadastroEmpresa, CadastroCandidato } from '../screens';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
    </Routes>
  );
}
