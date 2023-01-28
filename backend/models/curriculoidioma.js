'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculoIdioma extends Model {
    static associate(models) {
      CurriculoIdioma.belongsTo(models.Curriculo)
      CurriculoIdioma.belongsTo(models.Idioma)
    }
  }
  CurriculoIdioma.init(
    {
      CurriculoId: DataTypes.INTEGER,
      IdiomaId: DataTypes.INTEGER,
      nivel: DataTypes.STRING(45)
    },
    {
      sequelize,
      modelName: 'CurriculoIdioma'
    }
  )
  return CurriculoIdioma
}
