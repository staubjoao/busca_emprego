import { TelaInicial } from '../screens/TelaInicial';
import { Route, Routes } from 'react-router-dom';

import {
  CadastroCandidato,
  CadastroEmpresa,
  CadastroVaga,
  ListagemCurriculos,
  ListagemVagas,
  LoginCandidato,
  LoginEmpresa,
  CadastroCurriculo,
} from '../screens';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="login/candidato" element={<LoginCandidato />} />
      <Route path="login/empresa" element={<LoginEmpresa />} />
      <Route path="cadastro/empresa" element={<CadastroEmpresa />} />
      <Route path="cadastro/candidato" element={<CadastroCandidato />} />
      <Route path="candidato/:id/curriculo" element={<CadastroCurriculo />} />
      <Route path="candidato/vagas" element={<ListagemVagas />} />
      <Route path="empresa/curriculos" element={<ListagemCurriculos />} />
      <Route path="empresa/cadastro/vaga" element={<CadastroVaga />} />
    </Routes>
  );
}
