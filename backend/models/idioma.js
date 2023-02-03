'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Idiomas extends Model {
    static associate(models) {
      Idiomas.belongsToMany(models.Curriculo, {
        through: 'CurriculosIdiomas'
      })
    }
  }
  Idiomas.init(
    {
      idioma: DataTypes.STRING(80)
    },
    {
      sequelize,
      modelName: 'Idiomas'
    }
  )
  return Idiomas
}
