'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pergunta extends Model {
    static associate(models) {
      Pergunta.belongsToMany(models.Curriculo, {
        through: 'CurriculoPergunta'
      })
    }
  }
  Pergunta.init(
    {
      pergunta: DataTypes.STRING(2000)
    },
    {
      sequelize,
      modelName: 'Pergunta'
    }
  )
  return Pergunta
}
