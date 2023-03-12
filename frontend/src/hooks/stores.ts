import {
  CurriculoStore,
  IdiomasStore,
  CursoStore,
  SnackbarStore,
  EmpresaStore,
  CandidatoStore,
  LoginStore,
} from '../store';
import { createContext, useContext } from 'react';

const stores = {
  curriculoStore: new CurriculoStore(),
  idiomaStore: new IdiomasStore(),
  cursoStore: new CursoStore(),
  snackbarStore: new SnackbarStore(),
  empresaStore: new EmpresaStore(),
  candidatoStore: new CandidatoStore(),
  loginStore: new LoginStore(),
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};
