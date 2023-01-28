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
      termino: DataTypes.DATE,
      CurriculoId: DataTypes.INTEGER,
      CursoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CurriculoCurso'
    }
  )
  return CurriculoCurso
}
