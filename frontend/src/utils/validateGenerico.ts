const isEmailError = (email: string) => {
    if (email.trim() === '')
        return false
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const isSenhaError = (senha: string) => {
    return senha.trim() !== ''
}

const isNomeError = (nome: string) => {
    return nome.trim() !== ''
}

const isEnderecoError = (endereco: string) => {
    return endereco.trim() !== ''
}

const isBairroError = (bairro: string) => {
    return bairro.trim() !== ''
}

const isCidadeError = (cidade: string) => {
    return cidade.trim() !== ''
}

const isEstadoError = (estado: string) => {
    return estado.trim() !== ''
}

const isPaisError = (pais: string) => {
    return pais.trim() !== ''
}

const isNumeroError = (numero: string) => {
    return numero.trim() !== ''
}

const isTelefoneError = (telefone: string) => {
    const telefoneAux = telefone.replace(/\D/g, '')
    return telefone.trim() !== '' && telefoneAux.length >= 10
}

const isComplementoError = (complemento: string) => {
    return complemento.trim() !== ''
}

export {
    isEmailError,
    isSenhaError,
    isNomeError,
    isEnderecoError,
    isBairroError,
    isCidadeError,
    isEstadoError,
    isPaisError,
    isNumeroError,
    isTelefoneError,
    isComplementoError
}