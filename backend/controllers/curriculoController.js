const jwt = require('jsonwebtoken')
const models = require('../models')

const curriculo = {
    createCurriculo: async (req, res) => {
        const { idCandidato } = req.params
        const curriculos = models.Curriculo
        const experiencias = models.Experiencias
        const createExperiencia = []
        const curriculoExperiencias = models.CurriculoExperiencia
        const cursos = models.Curso
        const idiomas = models.Idioma

        let curriculo = await curriculos.findOne({
            where: {
                id: idCandidato,
            }
        })

        //if (curriculo===null) {
        try {
            console.log("REQ", req.body.experiencias)
            //const createXP = await experiencias.create(req.body.experiencias)
            var promises =  req.body.experiencias.map(source => experiencias.create(source));

            Promise.all(promises)
                .then(() => {
                    res.json(req.body)
                }).catch(error => {
                    res.send(error);
                    console.log('Error during Post: ' + error);
                });
            //   await curriculoExperiencias.create({
            //     inicio: createExperiencia.inicio,
            //     termino: createExperiencia.termino,
            //     cidade: curriculo.cidade,
            //     pais: curriculo.pais,
            //     salario: createExperiencia.salario,
            //     cargo: createExperiencia.cargo,
            //     ExperienciaId: createExperiencia.id,
            //     CurriculoId: curriculo.id
            // })
        } catch (e) {
            console.log("ERROR", e)
        }


        //}else {
        //  return res.json('Currículo já cadastrado')
        //}
    }
}

module.exports = curriculo
