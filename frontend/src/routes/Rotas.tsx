import { TelaInicial } from '../screens/TelaInicial';
import { Route, Routes } from 'react-router-dom';
import { LoginCandidato } from '../screens/LoginCandidato';
import { LoginEmpresa } from '../screens/LoginEmpresa';
import { CadastroEmpresa } from '../screens/CadastroEmpresa';
import { CadastroCandidato } from '../screens/CadastroCandidato';
import { CadastroCurriculo } from '../screens/CriarCurriculos';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
      <Route path="candidato/:id/curriculo" element={<CadastroCurriculo />} />
    </Routes>
  );
}
