import { makeAutoObservable } from 'mobx';
import { ItensList } from '../types/curriculo';
import { v4 as uuidv4 } from 'uuid';

export interface IdiomasStoreType {
  idioma: string;
  setIdioma: (
    idioma: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  nivel: string;
  setNivel: (
    nivel: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  idiomas: Array<ItensList>;
  setIdiomas: (idiomas: Array<ItensList>) => void;

  clearStatesIdiomas: () => void;
  handleSaveIdiomas: () => void;
  createNewIdioma: () => void;
}

export class IdiomasStore implements IdiomasStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  idioma: string = '';
  setIdioma(idioma: string) {
    this.idioma = idioma;
  }

  nivel: string = '';
  setNivel(nivel: string) {
    this.nivel = nivel;
  }

  idiomas: Array<ItensList> = [];
  setIdiomas(idiomas: Array<ItensList>) {
    this.idiomas = idiomas;
  }

  clearStatesIdiomas = () => {
    this.setIdioma('');
    this.setNivel('');
  };

  handleSaveIdiomas = () => {
    if (this.idioma && this.nivel) {
      const item = {
        firstItem: this.idioma,
        secondItem: this.nivel,
      };
      this.setIdiomas([item, ...this.idiomas]);
      this.clearStatesIdiomas();
    }
  };

  createNewIdioma = () => {
    if (!this.idiomas.length) {
      const idiomaItem = {
        firstItem: this.idioma,
        secondItem: this.nivel,
      };

      this.setIdiomas([idiomaItem, ...this.idiomas]);
    }
  };

  createIdioma = () => {
    const newId = uuidv4();

    return this.idiomas
      .filter((i) => i.firstItem !== '')
      .map((i, index) => {
        return {
          id: newId,
          idioma: i.firstItem,
          nivel: i.secondItem,
        };
      });
  };
}
