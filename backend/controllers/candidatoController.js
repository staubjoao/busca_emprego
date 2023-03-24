const models = require('../models')
const jwt = require('jsonwebtoken')

const candidato = models.Curriculo
const empresa = models.Empresa
const vaga = models.Vaga

const candidatoController = {
    cadastroCandidato: async (req, res) => {
        await candidato
            .create(req.body)
            .then(() => {
                return res.json({
                    error: false,
                    message: 'Candidato(a) criado(a) com sucesso.'
                })
            })
            .catch(erro => {
                return res.status(400).json({
                    error: true,
                    message: 'Falha na criação do(a) candidato(a).'
                })
            })
    },

    loginCandidato: async (req, res) => {
        const candidato = models.Curriculo

        let usuario = await candidato.findOne({
            where: {
                email: req.body.email,
                senha: req.body.senha
            }
        })

        if (!usuario)
            return res.json({ erro: true, mensagem: 'Email ou senha inválido' })

        const token = jwt.sign(
            { _id: usuario._id, _cpf: usuario._cpf },
            `${process.env.SECRET}`
        )

        res.json({
            id: usuario.id,
            nome: usuario.nome,
            token: token
        })
    },
    listarVagas: async (req, res) => {
        await vaga
            .findAll({
                where: { visualizar: true },
                include: [
                    {
                        model: empresa,
                        required: true,
                        attributes: ['nome', 'logo']
                    }
                ]
            })
            .then(vagas => res.json({ vagas }))
            .catch(erro => {
                return res.status(400).json({
                    error: true,
                    message: erro
                })
            })
    },

    exibirDadosVaga: async (req, res) => {
        await vaga
            .findOne({
                where: { id: req.params.id },
                include: [
                    {
                        model: empresa,
                        required: true,
                        attributes: ['nome', 'logo']
                    }
                ]
            })
            .then(vagas => res.json({ vagas }))
            .catch(erro => {
                return res.status(400).json({
                    error: true,
                    message: erro
                })
            })
    }
}

module.exports = candidatoController
