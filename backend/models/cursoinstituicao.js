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
    {
      CursoId: DataTypes.INTEGER,
      InstituicaoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CursoInstituicao'
    }
  )
  return CursoInstituicao
}
