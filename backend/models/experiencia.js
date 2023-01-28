'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Experiencia extends Model {
    static associate(models) {
      Experiencia.belongsToMany(models.Curriculo, {
        through: 'CurriculoExperiencia'
      })
    }
  }
  Experiencia.init(
    {
      empresa: DataTypes.STRING(45),
      endereco: DataTypes.STRING(45),
      ramo: DataTypes.STRING(45)
    },

    {
      sequelize,
      modelName: 'Experiencia'
    }
  )
  return Experiencia
}
