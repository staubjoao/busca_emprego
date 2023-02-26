import { CurriculoStore, IdiomasStore, CursoStore } from '../store';
import { createContext, useContext } from 'react';

const stores = {
  curriculoStore: new CurriculoStore(),
  idiomaStore: new IdiomasStore(),
  cursoStore: new CursoStore(),
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};

export const useCurriculoStore = () => new CurriculoStore();
