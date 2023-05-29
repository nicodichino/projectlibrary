//Importo sequelize e inicializo la nueva instancia

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('database', 'username', 'password', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;

