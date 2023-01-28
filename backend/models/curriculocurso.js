'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculoCurso extends Model {
    static associate(models) {
      CurriculoCurso.belongsTo(models.Curriculo)
      CurriculoCurso.belongsTo(models.Curso)
    }
  }
  CurriculoCurso.init(
    {
      inicio: DataTypes.DATE,
      termino: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'CurriculoCurso'
    }
  )
  return CurriculoCurso
}
