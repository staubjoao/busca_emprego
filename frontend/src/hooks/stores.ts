import { CurriculoStore, IdiomasStore } from '../store';
import { createContext, useContext } from 'react';

const stores = {
  curriculoStore: new CurriculoStore(),
  idiomaStore: new IdiomasStore(),
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};

export const useCurriculoStore = () => new CurriculoStore();
