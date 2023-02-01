const models = require('../models')


const jsonCurriculoExperiencia = (model, candidato) => ({
    id: model.id,
    inicio: model.inicio,
    termino: model.termino,
    cidade: candidato.cidade,
    pais: candidato.pais,
    salario: model.salario,
    cargo: model.cargo,
    ExperienciaId: model.id,
    CurriculoId: candidato.id
})

const jsonExperiencia = (model) => ({
    id: model.id,
    empresa: model.empresa,
    endereco: model.endereco,
    ramo: model.ramo
})

const getJSON = (value, model, candidato) => {
    switch (value) {
        case 'curriculoExperiencias':
            return jsonCurriculoExperiencia(model, candidato)
        case 'experiencias':
            return jsonExperiencia(model)
        default:
            console.log('nenhum')
    }
}


const returnChamadas = (req, res, valueBody, model, value, candidato) => {
    //console.log('valueBody', model)
    const getModel = models[`${model}`]
    return promises = req.body[`${valueBody}`].map(source => getModel.create(getJSON(value, source, candidato)));
}

const campos = [
    {
        valueBody: "experiencias",
        value: "experiencias",
        model: "Experiencias"
    },
    {
        valueBody: "experiencias",
        value: "curriculoExperiencias",
        model: "CurriculosExperiencias"
    }
]


const curriculo = {
    createCurriculo: async (req, res) => {
        const { idCandidato } = req.params
        const curriculos = models.Curriculo
        let curriculo = await curriculos.findOne({
            where: {
                id: idCandidato,
            }
        })

        try {
            campos.map(item => {
                const promises = returnChamadas(req, res, item.valueBody, item.model, item.value, curriculo)
                Promise.all(promises)
                    .then(() => {
                        console.log("BODY", req.body)
                    }).catch(error => {
                        console.log(error);
                        console.log(`Error during Post: ${item.value} ` + error);
                    })
            })

        } catch (e) {
            console.log("ERROR", e)
        }
    }
}

module.exports = curriculo
