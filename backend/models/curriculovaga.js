'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculoVaga extends Model {
    static associate(models) {
      CurriculoVaga.belongsTo(models.Curriculo)
      CurriculoVaga.belongsTo(models.Vaga)
    }
  }
  CurriculoVaga.init(
    {
      VagaId: DataTypes.INTEGER,
      CurriculoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CurriculoVaga'
    }
  )
  return CurriculoVaga
}
