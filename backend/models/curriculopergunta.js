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
      PerguntaId: DataTypes.INTEGER,
      CurriculoId: DataTypes.INTEGER,
      resposta: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CurriculoPergunta'
    }
  )
  return CurriculoPergunta
}
