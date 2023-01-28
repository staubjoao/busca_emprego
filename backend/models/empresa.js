'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    static associate(models) {
      Empresa.hasMany(models.Vaga)
    }
  }
  Empresa.init(
    {
      logo: DataTypes.TEXT,
      email: DataTypes.STRING(80),
      senha: DataTypes.STRING(22),
      nome: DataTypes.STRING(28),
      endereco: DataTypes.STRING(80),
      bairro: DataTypes.STRING(80),
      cidade: DataTypes.STRING(80),
      estado: DataTypes.STRING(80),
      pais: DataTypes.STRING(80),
      numero: DataTypes.INT,
      complemento: DataTypes.STRING(80),
      telefone: DataTypes.STRING(45),
      ramo: DataTypes.STRING(64),
      cnpj: DataTypes.STRING,
      cep: DataTypes.CHAR(8)
    },
    {
      sequelize,
      modelName: 'Empresa'
    }
  )
  return Empresa
}
