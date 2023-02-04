'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculosCursos extends Model {
    static associate(models) {
      CurriculosCursos.belongsTo(models.Curriculo)
      CurriculosCursos.belongsTo(models.Cursos)
    }
  }
  CurriculosCursos.init(
    {
      inicio: DataTypes.DATE,
      termino: DataTypes.DATE,
      CurriculoId: DataTypes.INTEGER,
      CursoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CurriculosCursos'
    }
  )
  return CurriculosCursos
}
