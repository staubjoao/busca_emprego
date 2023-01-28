'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CursoInstituicao extends Model {
    static associate(models) {
      CursoInstituicao.belongsTo(models.Instituicao)
      CursoInstituicao.belongsTo(models.Curso)
    }
  }
  CursoInstituicao.init(
    {},
    {
      sequelize,
      modelName: 'CursoInstituicao'
    }
  )
  return CursoInstituicao
}
