const jwt = require('jsonwebtoken')
const models = require('../models')

const curriculo = {
    createCurriculo: async (req, res) => {
        const curriculos = models.Curriculo

        let curriculo = await curriculos.findOne({
            where: {
                cpf: req.body.cpf,
            }
        })

        if (curriculo===null) {
            await curriculos.create(req.body)
            return res.json(req.body)
        }else {
            return res.json('Currículo já cadastrado')
        }
    }
}

module.exports = curriculo
