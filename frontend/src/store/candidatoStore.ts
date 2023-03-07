import { makeAutoObservable } from 'mobx';
import { createCandidato } from '../service';

export interface CandidatoStoreType {
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

    cpf: string;
    setCpf: (
        cpf: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    genero: string;
    setGenero: (
        genero: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    deficiencia: string;
    setDeficiencia: (
        deficiencia: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    pretensao: string;
    setPresensao: (
        pretensao: string
    ) => void | React.Dispatch<React.SetStateAction<string>>;

    descricao: string;
    setDescricao: (
        descricao: string
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

    generoError: boolean;
    setGeneroError: (
        generoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    deficienciaError: boolean;
    setDeficienciaError: (
        deficienciaError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    pretensaoError: boolean;
    setPretensaoError: (
        pretensaoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    descricaoError: boolean;
    setDescricaoError: (
        descricaoError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    cpfError: boolean;
    setCpfError: (
        cpfError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    formularioError: boolean;
    setFormularioError: (
        formularioError: boolean
    ) => void | React.Dispatch<React.SetStateAction<boolean>>;

    clearStatesEmpresa: () => void;

    handleCreateCandidato: (
        createEmail: any,
        createSenha: any,
        createNome: any,
        createCpf: any,
        createEndereco: any,
        createBairro: any,
        createCidade: any,
        createEstado: any,
        createPais: any,
        createNumero: any,
        createComplemento: any,
        createTelefone: any,
        createGenero: any,
        createDeficiencia: any,
        createCep: any,
    ) => void;
}

export class CandidatoStore implements CandidatoStoreType {
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

    cep: string = '';
    setCep(cep: string) {
        this.cep = cep;
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

    cpf: string = '';
    setCpf(cpf: string) {
        this.cpf = cpf;
    }

    genero: string = '';
    setGenero(genero: string) {
        this.genero = genero;
    }

    deficiencia: string = '';
    setDeficiencia(deficiencia: string) {
        this.deficiencia = deficiencia;
    }

    pretensao: string = '';
    setPresensao(pretensao: string) {
        this.pretensao = pretensao;
    }

    descricao: string = '';
    setDescricao(descricao: string) {
        this.descricao = descricao;
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

    generoError: boolean = false;
    setGeneroError(generoError: boolean) {
        this.generoError = generoError;
    }

    deficienciaError: boolean = false;
    setDeficienciaError(deficienciaError: boolean) {
        this.deficienciaError = deficienciaError;
    }

    pretensaoError: boolean = false;
    setPretensaoError(pretensaoError: boolean) {
        this.pretensaoError = pretensaoError;
    }

    descricaoError: boolean = false;
    setDescricaoError(descricaoError: boolean) {
        this.descricaoError = descricaoError;
    }

    cpfError: boolean = false;
    setCpfError(cpfError: boolean) {
        this.cpfError = cpfError;
    }

    formularioError: boolean = false;
    setFormularioError(formularioError: boolean) {
        this.formularioError = formularioError;
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
        this.setDeficiencia('');
        this.setGenero('');
        this.setCpf('');
        this.setCep('');
    };

    async handleCreateCandidato(
        email: string,
        senha: string,
        nome: string,
        cpf: string,
        endereco: string,
        bairro: string,
        cidade: string,
        estado: string,
        pais: string,
        numero: string,
        complemento: string,
        telefone: string,
        genero: string,
        deficiencia: string,
        cep: string
    ) {
        const response = await createCandidato(
            email,
            senha,
            nome,
            cpf,
            endereco,
            bairro,
            cidade,
            estado,
            pais,
            numero,
            complemento,
            telefone,
            genero,
            deficiencia,
            cep
        );
        return response;
    }
}