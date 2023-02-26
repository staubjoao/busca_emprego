import { makeAutoObservable } from 'mobx';

export interface CurriculoStoreType {
  nomeEmpresa: string;
  setNomeEmpresa: (nomeEmpresa: string) => void;
}

export class CurriculoStore implements CurriculoStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  nomeEmpresa: string = '';
  setNomeEmpresa(nomeEmpresa: string) {
    this.nomeEmpresa = nomeEmpresa;
  }
}
