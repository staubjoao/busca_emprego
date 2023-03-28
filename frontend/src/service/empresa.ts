import { api } from './baseURL';

export const createEmpresa = async (
    logo: string,
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
) => {
    const response = await api.post(`/usuario/cadastro/empresas`, {
        logo,
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
    });

    return { ok: response.statusText };
};