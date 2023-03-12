import { makeAutoObservable } from 'mobx';
import { createEmpresa } from '../service';

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

    emailError: boolean;
    setEmailError: (
        emailError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    senhaError: boolean;
    setSenhaError: (
        senhaError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    nomeError: boolean;
    setNomeError: (
        nomeError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    cepError: boolean;
    setCepError: (
        cepError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    enderecoError: boolean;
    setEnderecoError: (
        enderecoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    bairroError: boolean;
    setBairroError: (
        bairroError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    cidadeError: boolean;
    setCidadeError: (
        cidadeError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    estadoError: boolean;
    setEstadoError: (
        estadoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    paisError: boolean;
    setPaisError: (
        paisError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    numeroError: boolean;
    setNumeroError: (
        numeroError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    complementoError: boolean;
    setComplementoError: (
        complementoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    telefoneError: boolean;
    setTelefoneError: (
        telefoneError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    ramoError: boolean;
    setRamoError: (
        ramoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    cnpjError: boolean;
    setCnpjError: (
        cnpjError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    clearStatesEmpresa: () => void;

    handleCreateEmpresa: (
        createEmail: any,
        createSenha: any,
        createNome: any,
        createEndereco: any,
        createBairro: any,
        createCidade: any,
        createEstado: any,
        createPais: any,
        createNumero: any,
        createComplemento: any,
        createTelefone: any,
        createRamo: any,
        createCnpj: any,
        createCep: any
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

    emailError: boolean = false;
    setEmailError(emailError: boolean) {
        this.emailError = emailError;
    }

    senhaError: boolean = false;
    setSenhaError(senhaError: boolean) {
        this.senhaError = senhaError;
    }

    nomeError: boolean = false;
    setNomeError(nomeError: boolean) {
        this.nomeError = nomeError;
    }

    cepError: boolean = false;
    setCepError(cepError: boolean) {
        this.cepError = cepError;
    }

    enderecoError: boolean = false;
    setEnderecoError(enderecoError: boolean) {
        this.enderecoError = enderecoError;
    }

    bairroError: boolean = false;
    setBairroError(bairroError: boolean) {
        this.bairroError = bairroError;
    }

    cidadeError: boolean = false;
    setCidadeError(cidadeError: boolean) {
        this.cidadeError = cidadeError;
    }

    estadoError: boolean = false;
    setEstadoError(estadoError: boolean) {
        this.estadoError = estadoError;
    }

    paisError: boolean = false;
    setPaisError(paisError: boolean) {
        this.paisError = paisError;
    }

    numeroError: boolean = false;
    setNumeroError(numeroError: boolean) {
        this.numeroError = numeroError;
    }

    complementoError: boolean = false;
    setComplementoError(complementoError: boolean) {
        this.complementoError = complementoError;
    }

    telefoneError: boolean = false;
    setTelefoneError(telefoneError: boolean) {
        this.telefoneError = telefoneError;
    }

    ramoError: boolean = false;
    setRamoError(ramoError: boolean) {
        this.ramoError = ramoError;
    }

    cnpjError: boolean = false;
    setCnpjError(cnpjError: boolean) {
        this.cnpjError = cnpjError;
    }

    cep: string = '';
    setCep(cep: string) {
        this.cep = cep;
    }

    clearStatesEmpresa = () => {
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
        numero: string,
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