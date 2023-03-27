// Teste de unidade/caixa preta João Vitor Staub Castanho
import {
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
    isComplementoError,
} from '../utils/validateGenerico'

import { isCnpjError, isRamoError } from '../utils/validateEmpresa'

describe('Validação de campos', () => {
    test('email em branco', () => {
        expect(isEmailError('')).toBe(false);
    });

    test('email com formato invalido', () => {
        expect(isEmailError('invalido')).toBe(false);
    });

    test('email valido', () => {
        expect(isEmailError('teste@gmail.com')).toBe(true);
    });

    test('senha em branco', () => {
        expect(isSenhaError('')).toBe(false);
    })

    test('senha invalido', () => {
        expect(isSenhaError('1234')).toBe(false);
    })

    test('senha valido', () => {
        expect(isSenhaError('teste1234')).toBe(true);
    })

    test('nome empresa em branco', () => {
        expect(isNomeError('')).toBe(false);
    })

    test('nome empresa valido', () => {
        expect(isNomeError('Google ltd')).toBe(true);
    })

    test('endereco em branco', () => {
        expect(isEnderecoError('')).toBe(false);
    })

    test('endereco valido', () => {
        expect(isEnderecoError('Rua das Flores')).toBe(true);
    })

    test('bairro em branco', () => {
        expect(isBairroError('')).toBe(false);
    })

    test('bairro valido', () => {
        expect(isBairroError('Centro')).toBe(true);
    })

    test('cidade em branco', () => {
        expect(isCidadeError('')).toBe(false);
    })

    test('cidade valida', () => {
        expect(isCidadeError('São Paulo')).toBe(true);
    })

    test('estado em branco', () => {
        expect(isEstadoError('')).toBe(false);
    })

    test('estado valido', () => {
        expect(isEstadoError('SP')).toBe(true);
    })

    test('estado invalido', () => {
        expect(isEstadoError('SPa')).toBe(false);
    })

    test('pais em branco', () => {
        expect(isPaisError('')).toBe(false);
    })

    test('pais valido', () => {
        expect(isPaisError('Brasil')).toBe(true);
    })

    test('numero em branco', () => {
        expect(isNumeroError('')).toBe(false);
    })

    test('numero valido', () => {
        expect(isNumeroError('123')).toBe(true);
    })

    test('numero invalido', () => {
        expect(isNumeroError('123a4')).toBe(false);
    })

    test('telefone em branco', () => {
        expect(isTelefoneError('')).toBe(false);
    })

    test('telefone invalido', () => {
        expect(isTelefoneError('(11) 999-9999')).toBe(false);
    })

    test('telefone valido', () => {
        expect(isTelefoneError('(11) 9999-9999')).toBe(true);
    })

    test('complemento em branco', () => {
        expect(isComplementoError('')).toBe(false);
    })

    test('complemento valido', () => {
        expect(isComplementoError('Fachada verde')).toBe(true);
    })

    test('ramo em branco', () => {
        expect(isRamoError('')).toBe(false);
    })

    test('ramo valido', () => {
        expect(isRamoError('Tecnologia')).toBe(true);
    })

    test('cnpj em branco', () => {
        expect(isCnpjError('')).toBe(false);
    })

    test('cnpj valido', () => {
        expect(isCnpjError('23.192.009/0001-47')).toBe(true);
    })

    test('cnpj invalido', () => {
        expect(isCnpjError('213.192.009/0001-47')).toBe(false);
    })

});