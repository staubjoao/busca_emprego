'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Instituicao extends Model {
    static associate(models) {
      Instituicao.belongsToMany(models.Cursos, {
        through: 'CursosInstituicoes'
      })
    }
  }
  Instituicao.init(
    {
      nome: DataTypes.STRING(128),
      cidade: DataTypes.STRING(45),
      pais: DataTypes.STRING(45)
    },
    {
      sequelize,
      modelName: 'Instituicao'
    }
  )
  return Instituicao
}
