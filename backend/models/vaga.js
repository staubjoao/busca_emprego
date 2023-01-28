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
      tipo: DataTypes.STRING(45),
      descricao: DataTypes.TEXT,
      nivel_hierarquico: DataTypes.STRING(45),
      salario: DataTypes.FLOAT,
      EmpresaId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Vaga'
    }
  )
  return Vaga
}
