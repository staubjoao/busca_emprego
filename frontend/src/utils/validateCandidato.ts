const isDeficienciaError = (deficiencia: string) => {
    return deficiencia.trim() !== ''
}

const isGeneroError = (genero: string) => {
    return genero.trim() !== ''
}

const isPretensaoError = (pretensao: string) => {
    return pretensao.trim() !== ''
}

const isDescricaoError = (descricao: string) => {
    return descricao.trim() !== ''
}

const isAreaAtuacaoError = (areaAtuacao: string) => {
    return areaAtuacao.trim() !== ''
}

const isCpfError = (cpf: string) => {
    const cpfAux = cpf.replace(/[^\d]+/g, '');
    if (cpfAux === '') 
    {
        return false;
    }else
    {
        if (cpfAux.length !== 11 ||
            cpfAux === "00000000000" ||
            cpfAux === "11111111111" ||
            cpfAux === "22222222222" ||
            cpfAux === "33333333333" ||
            cpfAux === "44444444444" ||
            cpfAux === "55555555555" ||
            cpfAux === "66666666666" ||
            cpfAux === "77777777777" ||
            cpfAux === "88888888888" ||
            cpfAux === "99999999999")
            {
                return false;
            }
        else
        {
            let add = 0;
            for (let i = 0; i < 9; i++)
            {
                add += parseInt(cpfAux.charAt(i)) * (10 - i);
            }
            let rev = 11 - (add % 11);
            if (rev === 10 || rev === 11)
            {
                rev = 0;
            }
            if (rev !== parseInt(cpfAux.charAt(9)))
            {
                return false;
            }
            add = 0;
            for (let i = 0; i < 10; i++)
            {
                add += parseInt(cpfAux.charAt(i)) * (11 - i);
            }
            rev = 11 - (add % 11);
            if (rev === 10 || rev === 11)
            {
                rev = 0;
            }
            if (rev !== parseInt(cpfAux.charAt(10)))
            {
                return false;
            }
            return true;
        }
    
    }
}

export {
    isDeficienciaError,
    isGeneroError,
    isPretensaoError,
    isDescricaoError,
    isCpfError,
    isAreaAtuacaoError,
}