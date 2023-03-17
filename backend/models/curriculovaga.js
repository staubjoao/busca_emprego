'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurriculosVagas extends Model {
    static associate(models) {
      CurriculosVagas.belongsTo(models.Curriculo);
      CurriculosVagas.belongsTo(models.Vaga);
    }
  }
  CurriculosVagas.init(
    {
      VagaId: DataTypes.INTEGER,
      CurriculoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CurriculosVagas',
    }
  );
  return CurriculosVagas;
};
