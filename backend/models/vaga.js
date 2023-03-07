'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    static associate(models) {
      Vaga.belongsToMany(models.Curriculo, {
        through: 'CurriculoVaga',
        foreignKey: 'VagaId'
      })
      Vaga.belongsTo(models.Empresa)
    }
  }
  Vaga.init(
    {
      titulo: DataTypes.STRING,
      descricao: DataTypes.TEXT,
      periodo: DataTypes.STRING(45),
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
