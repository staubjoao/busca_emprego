'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    static associate(models) {
      Cursos.belongsToMany(models.Curriculo, {
        through: 'CurriculoCurso'
      })

      Cursos.belongsToMany(models.Instituicao, {
        through: 'CursoInstituicao'
      })
    }
  }
  Cursos.init(
    {
      curso: DataTypes.STRING(100)
    },
    {
      sequelize,
      modelName: 'Cursos'
    }
  )
  return Cursos
}
