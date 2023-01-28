'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CurriculoPergunta extends Model {
    static associate(models) {
      CurriculoPergunta.belongsTo(models.Curriculo)
      CurriculoPergunta.belongsTo(models.Pergunta)
    }
  }
  CurriculoPergunta.init(
    {
      resposta: DataTypes.INT
    },
    {
      sequelize,
      modelName: 'CurriculoPergunta'
    }
  )
  return CurriculoPergunta
}
