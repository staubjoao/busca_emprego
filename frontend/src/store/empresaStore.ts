import { makeAutoObservable, toJS } from 'mobx';
import { ItensList } from '../types/curriculo';
import { createEmpresa } from '../service';
import { SnackbarStore } from './snackbar';

export interface EmpresaStoreType {
    email: string;
    setEmail: (
        email: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    senha: string;
    setSenha: (
        senha: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    nome: string;
    setNome: (
        nome: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    endereco: string;
    setEndereco: (
        endereco: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    bairro: string;
    setBairro: (
        bairro: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    cidade: string;
    setCidade: (
        cidade: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    estado: string;
    setEstado: (
        estado: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    pais: string;
    setPais: (
        pais: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    numero: string;
    setNumero: (
        numero: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    complemento: string;
    setComplemento: (
        complemento: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    telefone: string;
    setTelefone: (
        telefone: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    ramo: string;
    setRamo: (
        ramo: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    cnpj: string;
    setCnpj: (
        cnpj: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    cep: string;
    setCep: (
        cep: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    clearStatesEmpresa: () => void;
    createEmpresa: () => void;

    handleCreateEmpresa: (
        email: string,
        senha: string,
        nome: string,
        endereco: string,
        bairro: string,
        cidade: string,
        estado: string,
        pais: string,
        numero: string,
        complemento: string,
        telefone: string,
        ramo: string,
        cnpj: string,
        cep: string
    ) => void;
}

export class EmpresaStore implements EmpresaStoreType {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    email: string = '';
    setEmail(email: string) {
        this.email = email;
    }

    senha: string = '';
    setSenha(senha: string) {
        this.senha = senha;
    }

    nome: string = '';
    setNome(nome: string) {
        this.nome = nome;
    }

    endereco: string = '';
    setEndereco(endereco: string) {
        this.endereco = endereco;
    }

    bairro: string = '';
    setBairro(bairro: string) {
        this.bairro = bairro;
    }

    cidade: string = '';
    setCidade(cidade: string) {
        this.cidade = cidade;
    }

    estado: string = '';
    setEstado(estado: string) {
        this.estado = estado;
    }

    pais: string = '';
    setPais(pais: string) {
        this.pais = pais;
    }

    numero: string = '';
    setNumero(numero: string) {
        this.numero = numero;
    }

    complemento: string = '';
    setComplemento(complemento: string) {
        this.complemento = complemento;
    }

    telefone: string = '';
    setTelefone(telefone: string) {
        this.telefone = telefone;
    }

    ramo: string = '';
    setRamo(ramo: string) {
        this.ramo = ramo;
    }

    cnpj: string = '';
    setCnpj(cnpj: string) {
        this.cnpj = cnpj;
    }

    cep: string = '';
    setCep(cep: string) {
        this.cep = cep;
    }

    clearStatesCurriculo = () => {
        this.setEmail('');
        this.setSenha('');
        this.setNome('');
        this.setEndereco('');
        this.setBairro('');
        this.setCidade('');
        this.setEstado('');
        this.setPais('');
        this.setNumero('');
        this.setComplemento('');
        this.setTelefone('');
        this.setRamo('');
        this.setCnpj('');
        this.setCep('');
    };

    async handleCreateEmpresa(
        email: string,
        senha: string,
        nome: string,
        ramo: string,
        cnpj: string,
        pais: string,
        cep: string,
        estado: string,
        cidade: string,
        endereco: string,
        numero: number,
        bairro: string,
        complemento: string,
        telefone: string
    ) {
        const response = await createEmpresa(
            email,
            senha,
            nome,
            ramo,
            cnpj,
            pais,
            cep,
            estado,
            cidade,
            endereco,
            numero,
            bairro,
            complemento,
            telefone
        );
        return response;
    }
}