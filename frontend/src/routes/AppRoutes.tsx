import { Route, Routes } from 'react-router-dom';

import {
  CadastroCandidato,
  CadastroEmpresa,
  CadastroVaga,
  ListagemCurriculos,
  ListagemVagas,
  CadastroCurriculo,
} from '../screens';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
      <Route path="candidato/:id/curriculo" element={<CadastroCurriculo />} />
      <Route path="candidato/vagas" element={<ListagemVagas />} />
      <Route path="empresa/curriculos" element={<ListagemCurriculos />} />
      <Route path="empresa/cadastro/vaga" element={<CadastroVaga />} />
    </Routes>
  );
}
