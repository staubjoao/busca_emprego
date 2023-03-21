'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CursosInstituicoes extends Model {
    static associate(models) {
      CursosInstituicoes.belongsTo(models.Instituicao)
      CursosInstituicoes.belongsTo(models.Cursos)
    }
  }
  CursosInstituicoes.init(
    {
      CursoId: DataTypes.INTEGER,
      InstituicaoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CursosInstituicoes'
    }
  )
  return CursosInstituicoes
}
