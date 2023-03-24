const models = require('../models')
const jwt = require('jsonwebtoken')

const empresa = models.Empresa

const empresaController = {
    cadastroEmpresa: async (req, res) => {
        await empresa
            .create(req.body)
            .then(() => {
                return res.json({
                    error: false,
                    message: 'Empresa criada com sucesso.'
                })
            })
            .catch(erro => {
                return res.status(400).json({
                    error: true,
                    message: 'Falha na criação da empresa.'
                })
            })
    },

    loginEmpresa: async (req, res) => {
        let usuario = await empresa.findOne({
            where: {
                cnpj: req.body.cnpj,
                senha: req.body.senha
            }
        })

        if (!usuario)
            return res.json({ erro: true, mensagem: 'Cnpj ou senha inválido' })

        const token = jwt.sign(
            { _id: usuario._id, _cnpj: usuario._cnpj },
            process.env.SECRET
        )

        res.json({
            id: usuario.id,
            token: token,
            nome: usuario.nome
        })
    },
}

module.exports = empresaController