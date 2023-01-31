'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculoExperiencia extends Model {
    static associate(models) {
      CurriculoExperiencia.belongsTo(models.Experiencias)
      CurriculoExperiencia.belongsTo(models.Curriculo)
    }
  }
  CurriculoExperiencia.init(
    {
      inicio: DataTypes.DATE,
      termino: DataTypes.DATE,
      cidade: DataTypes.STRING(45),
      pais: DataTypes.STRING(45),
      salario: DataTypes.FLOAT,
      cargo: DataTypes.STRING(100),
      ExperienciaId: DataTypes.INTEGER,
      CurriculoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CurriculoExperiencia'
    }
  )
  return CurriculoExperiencia
}
