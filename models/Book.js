//Creacion del modelo de libros

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Library = require('./Library');

class Book extends Model {
  
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
  }
);

Book.belongsTo(Library, { foreignKey: 'libraryId' });

module.exports = Book;


