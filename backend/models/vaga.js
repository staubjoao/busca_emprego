'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    static associate(models) {
      Vaga.belongsToMany(models.Curriculo, {
        through: 'CurriculoVaga'
      })
      Vaga.belongsTo(models.Empresa)
    }
  }
  Vaga.init(
    {
      jornada: DataTypes.CHAR(2),
      tipo_contrato: DataTypes.CHAR(2),
      nivel_hierarquico: DataTypes.STRING(45),
      salario: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: 'Vaga'
    }
  )
  return Vaga
}
