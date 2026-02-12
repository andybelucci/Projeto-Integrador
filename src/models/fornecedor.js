const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Fornecedor = sequelize.define('Fornecedor', {
  nomeFornecedor: { type: DataTypes.STRING, allowNull: false },
  cnpj: { type: DataTypes.STRING, unique: true, allowNull: false },
  enderecoContato: { type: DataTypes.STRING }
});

module.exports = Fornecedor;
