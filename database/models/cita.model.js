/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Cita = sequelize.define('Cita', {
  cita_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: true,
});

module.exports = Cita;
