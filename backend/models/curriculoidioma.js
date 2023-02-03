'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculosIdiomas extends Model {
    static associate(models) {
      CurriculosIdiomas.belongsTo(models.Curriculo)
      CurriculosIdiomas.belongsTo(models.Idiomas)
    }
  }
  CurriculosIdiomas.init(
    {
      CurriculoId: DataTypes.INTEGER,
      IdiomaId: DataTypes.INTEGER,
      nivel: DataTypes.STRING(45)
    },
    {
      sequelize,
      modelName: 'CurriculosIdiomas'
    }
  )
  return CurriculosIdiomas
}
