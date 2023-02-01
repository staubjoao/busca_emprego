'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculosExperiencias extends Model {
    static associate(models) {
      CurriculosExperiencias.belongsTo(models.Experiencias)
      CurriculosExperiencias.belongsTo(models.Curriculo)
    }
  }
  CurriculosExperiencias.init(
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
      modelName: 'CurriculosExperiencias'
    }
  )
  return CurriculosExperiencias
}
