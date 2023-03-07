const isRamoError = (ramo: string) => {
    return ramo.trim() !== ''
}

const isCnpjError = (cnpj: string) => {
    const cpnjAux = cnpj.replace(/\D/g, '')
    return cpnjAux.length === 14
}

export {
    isRamoError,
    isCnpjError,
}