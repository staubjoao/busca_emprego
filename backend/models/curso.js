'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsToMany(models.Curriculo, {
        through: 'CurriculoCurso'
      })

      Curso.belongsToMany(models.Instituicao, {
        through: 'CursoInstituicao'
      })
    }
  }
  Curso.init(
    {
      curso: DataTypes.STRING(100)
    },
    {
      sequelize,
      modelName: 'Curso'
    }
  )
  return Curso
}
