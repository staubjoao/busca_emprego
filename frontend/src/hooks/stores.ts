import {
  CurriculoStore,
  IdiomasStore,
  CursoStore,
  SnackbarStore,
  EmpresaStore,
  CandidatoStore,
>>>>>>>>> Temporary merge branch 2
} from '../store';
import { createContext, useContext } from 'react';

const stores = {
  curriculoStore: new CurriculoStore(),
  idiomaStore: new IdiomasStore(),
  cursoStore: new CursoStore(),
  snackbarStore: new SnackbarStore(),
  empresaStore: new EmpresaStore(),
  candidatoStore: new CandidatoStore(),
>>>>>>>>> Temporary merge branch 2
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};

export const useCurriculoStore = () => new CurriculoStore();
