const { Sequelize } = require("sequelize");

// Configuração da conexão com PostgreSQL
const sequelize = new Sequelize("db_Integrador", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // desabilita logs SQL no console
});

module.exports = sequelize;
