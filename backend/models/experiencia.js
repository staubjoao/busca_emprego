'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Experiencias extends Model {
    static associate(models) {
      Experiencias.belongsToMany(models.Curriculo, {
        through: 'CurriculoExperiencia'
      })
    }
  }
  Experiencias.init(
    {
      empresa: DataTypes.STRING(45),
      endereco: DataTypes.STRING(45),
      ramo: DataTypes.STRING(45)
    },

    {
      sequelize,
      modelName: 'Experiencias'
    }
  )
  return Experiencias
}
