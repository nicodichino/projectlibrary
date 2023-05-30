//Importo sequelize e inicializo la nueva instancia

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('projectlibrary', 'nicodichino', 'clave', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;

