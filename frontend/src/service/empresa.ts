import { api } from './baseURL';

export const createEmpresa = async (
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
    console.log('ENTROU');
    const response = await api.post(`/usuario/cadastro/empresas`, {
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

    console.log('RESPONSE', response);

    return { ok: response.statusText };
};