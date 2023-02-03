'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CursosIntituicoes extends Model {
    static associate(models) {
      CursosIntituicoes.belongsTo(models.Instituicao)
      CursosIntituicoes.belongsTo(models.Cursos)
    }
  }
  CursosIntituicoes.init(
    {
      CursoId: DataTypes.INTEGER,
      InstituicaoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CursosIntituicoes'
    }
  )
  return CursosIntituicoes
}
