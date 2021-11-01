/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Paciente = sequelize.define('Paciente', {
  preferencia_de_lugar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  historia_clinica: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eps: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, {
  timestamps: true,
});

module.exports = Paciente;
