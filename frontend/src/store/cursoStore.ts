import { makeAutoObservable } from 'mobx';
import { ItensList } from '../types/curriculo';

export interface CursoStoreType {
  curso: string;
  setCurso: (
    curso: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  inicioCurso: string;
  setInicioCurso: (
    inicioCurso: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  fimCurso: string;
  setFimCurso: (
    fimCurso: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  cursos: Array<ItensList>;
  setCursos: (cursos: Array<ItensList>) => void;

  clearStatesCursos: () => void;
}

export class CursoStore implements CursoStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  curso: string = '';
  setCurso(curso: string) {
    this.curso = curso;
  }

  inicioCurso: string = '';
  setInicioCurso(inicioCurso: string) {
    this.inicioCurso = inicioCurso;
  }

  fimCurso: string = '';
  setFimCurso(fimCurso: string) {
    this.fimCurso = fimCurso;
  }

  cursos: Array<ItensList> = [];
  setCursos(cursos: Array<ItensList>) {
    this.cursos = cursos;
  }

  clearStatesCursos = () => {
    this.setCurso('');
    this.setFimCurso('');
    this.setInicioCurso('');
  };
}
