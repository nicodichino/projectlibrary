//Creacion del modelo para las librerias

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Library = sequelize.define('Library', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Library;
