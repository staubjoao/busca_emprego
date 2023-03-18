import { makeAutoObservable } from "mobx";
import { FormEvent } from "react";
import { cadastroVaga } from "../service/vagas";

export interface VagaStoreType {
  id: string,
  setId: (
    id: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  titulo: string;
  setTitulo: (
    titulo: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  descricao: string;
  setDescricao: (
    descricao: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  periodo: string;
  setPeriodo: (periodo: string) => void | React.Dispatch<React.SetStateAction<string>>;

  salario: number;
  setSalario: (
    salario: number
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  visualizar: number;
  setVisualizar: (
    visualizar: number
  ) => void | React.Dispatch<React.SetStateAction<number>>;

  erro: string;
  setErro: (
    erro: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  canNavigate: boolean;
  setCanNavigate: (
    canNavigate: boolean
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  empresaId: string;
  setEmpresaId: (
    empresaId: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  empresa: Object;
  setEmpresa: (empresa: Object) => void;

  vagas: Array<ItensList>;
  setVagas: (vagas: Array<ItensList>) => void;

  clearStatesVaga: () => void;
  handleSaveVagas: () => void;
  handleCreateVaga: (
    token: string,
    e: FormEvent,
    titulo: string,
    periodo: string,
    descricao: string,
    salario: number,
    EmpresaId: string | null,
    setErro: any,
    setCanNavigate: any
  ) => void;
}

export type ItensList = {
    id: string
    titulo: string
    descricao: string
    periodo: string
    salario: number | null
    visualizar: number
    empresaId: string
    empresa: Object
};

export class VagaStore implements VagaStoreType{
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  titulo: string = '';
  setTitulo(titulo: string){
    this.titulo = titulo
  }

  descricao: string = '';
  setDescricao(descricao: string){
    this.descricao = descricao
  }

  periodo: string = '';
  setPeriodo(periodo: string){
    this.periodo = periodo
  }

  salario: number = 0;
  setSalario(salario: number){
    this.salario = salario
  }

  visualizar: number = 0;
  setVisualizar(visualizar: number){
    this.visualizar = visualizar
  }

  erro: string = '';
  setErro(erro: string){
    this.erro = erro
  }

  canNavigate: boolean = false;
  setCanNavigate(canNavigate: boolean){
    this.canNavigate = canNavigate
  }

  empresaId: string = '';
  setEmpresaId(empresaId: string){
    this.empresaId = empresaId
  }

  id: string = '';
  setId(id: string){
    this.id = id
  }

  empresa: Object = {};
  setEmpresa(empresa: Object) {
    this.empresa = empresa;
  }

  vagas: Array<ItensList> = [];
  setVagas(vagas: Array<ItensList>) {
    this.vagas = vagas;
  }

  clearStatesVaga = () => {
    this.setTitulo('')
    this.setDescricao('')
    this.setPeriodo('')
    this.setSalario(0)
    this.setEmpresaId('')
    this.setErro('')
    this.setVisualizar(0)
    this.setId('')
    this.setEmpresa({})
  }

  handleSaveVagas = () => {
    if (this.titulo && this.periodo && this.salario && this.visualizar && this.empresa && this.id && this.empresaId && this.empresa) {
      const item = {
        id: this.id,
        titulo: this.titulo,
        periodo: this.periodo,
        salario: this.salario,
        visualizar: this.salario,
        empresaId: this.empresaId,
        descricao: this.descricao,
        empresa: this.empresa,
      };
      this.setVagas([item, ...this.vagas]);
      this.clearStatesVaga();
    }
  };

  handleCreateVaga = async (
    token: string,
    e: FormEvent,
    titulo: string,
    periodo: string,
    descricao: string,
    salario: number,
    EmpresaId: string | null,
    setErro: any,
    setCanNavigate: any) => {
      
    const response = await cadastroVaga(token,
      e,
      titulo,
      periodo,
      descricao,
      salario,
      EmpresaId,
      setErro,
      setCanNavigate)

      this.clearStatesVaga()

      return response 
  }

 
}