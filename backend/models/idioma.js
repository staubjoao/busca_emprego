'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Idioma extends Model {
    static associate(models) {
      Idioma.belongsToMany(models.Curriculo, {
        through: 'CurriculoIdioma'
      })
    }
  }
  Idioma.init(
    {
      idioma: DataTypes.STRING(80)
    },
    {
      sequelize,
      modelName: 'Idioma'
    }
  )
  return Idioma
}
