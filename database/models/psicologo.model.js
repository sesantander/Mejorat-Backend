/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Psicologo = sequelize.define('Psicologo', {
  tarifa_por_hora: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  certificado_estudio: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  horas_trabajadas: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  calificacion: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },

}, {
  timestamps: true,
});

module.exports = Psicologo;
