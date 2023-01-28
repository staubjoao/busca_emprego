'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Curriculo extends Model {
    static associate(models) {
      Curriculo.belongsToMany(models.Pergunta, {
        through: 'CurriculoPergunta'
      })

      Curriculo.belongsToMany(models.Idioma, {
        through: 'CurriculoIdioma'
      })

      Curriculo.belongsToMany(models.Curso, {
        through: 'CurriculoCurso'
      })

      Curriculo.belongsToMany(models.Experiencia, {
        through: 'CurriculoExperiencia'
      })

      Curriculo.belongsToMany(models.Vaga, {
        through: 'CurriculoVaga'
      })
    }
  }
  Curriculo.init(
    {
      perfil: DataTypes.TEXT,
      email: DataTypes.STRING(80),
      senha: DataTypes.STRING(22),
      nome: DataTypes.STRING(100),
      cpf: DataTypes.CHAR(11),
      endereco: DataTypes.STRING(80),
      bairro: DataTypes.STRING(80),
      cidade: DataTypes.STRING(80),
      estado: DataTypes.STRING(80),
      pais: DataTypes.STRING(80),
      numero: DataTypes.INTEGER,
      complemento: DataTypes.STRING(80),
      telefone: DataTypes.STRING(45),
      sexo: DataTypes.CHAR(1),
      genero: DataTypes.CHAR(1),
      deficiencia: DataTypes.BOOLEAN,
      cep: DataTypes.CHAR(8)
    },
    {
      sequelize,
      modelName: 'Curriculo'
    }
  )
  return Curriculo
}
