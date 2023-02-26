import { makeAutoObservable } from 'mobx';
import { ItensList } from '../types/curriculo';
import { createCurriculo } from '../service';

export interface CurriculoStoreType {
  nomeEmpresa: string;
  setNomeEmpresa: (
    nomeEmpresa: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  inicio: string;
  setInicio: (
    inicio: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  fim: string;
  setFim: (fim: string) => void | React.Dispatch<React.SetStateAction<string>>;

  cargo: string;
  setCargo: (
    fim: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  experiencias: Array<ItensList>;
  setExperiencias: (experiencias: Array<ItensList>) => void;

  clearStatesCurriculo: () => void;
  handleSaveExperience: () => void;
  createExperience: () => void;
  handleCreateCurriculo: (
    id: string,
    experiencias: any,
    idiomas: any,
    cursos: any
  ) => void;
}

export class CurriculoStore implements CurriculoStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  nomeEmpresa: string = '';
  setNomeEmpresa(nomeEmpresa: string) {
    this.nomeEmpresa = nomeEmpresa;
  }

  inicio: string = '';
  setInicio(inicio: string) {
    this.inicio = inicio;
  }

  fim: string = '';
  setFim(fim: string) {
    this.fim = fim;
  }

  cargo: string = '';
  setCargo(cargo: string) {
    this.cargo = cargo;
  }

  experiencias: Array<ItensList> = [];
  setExperiencias(experiencias: Array<ItensList>) {
    this.experiencias = experiencias;
  }

  clearStatesCurriculo = () => {
    this.setCargo('');
    this.setInicio('');
    this.setFim('');
    this.setNomeEmpresa('');
  };

  handleSaveExperience = () => {
    if (this.cargo && this.fim && this.nomeEmpresa && this.inicio) {
      const item = {
        firstItem: this.nomeEmpresa,
        secondItem: this.cargo,
        thirdItem: this.inicio,
        fourItem: this.fim,
      };
      this.setExperiencias([item, ...this.experiencias]);
      this.clearStatesCurriculo();
    }
  };

  createNewExperience() {
    if (!this.experiencias.length) {
      const experienceItem = {
        firstItem: this.cargo,
        secondItem: this.fim,
        thirdItem: this.inicio,
        fourItem: this.nomeEmpresa,
      };

      this.setExperiencias([experienceItem, ...this.experiencias]);
    }
  }

  createExperience() {
    return this.experiencias
      .filter((i) => i.firstItem !== '')
      .map((i, index) => {
        return {
          id: index + 10,
          empresa: i.firstItem,
          cargo: i.secondItem,
          inicio: i.thirdItem,
          termino: i.fourItem,
          endereco: 'Rua Palmital',
          ramo: 'algum',
        };
      });
  }

  async handleCreateCurriculo(
    id: string,
    experiencias: any,
    idiomas: any,
    cursos: any
  ) {
    return await createCurriculo(id as any, experiencias, idiomas, cursos);
  }
}
