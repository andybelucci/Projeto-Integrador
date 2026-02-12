const sequelize = require("../database");
const Produto = require("./produto");
const Fornecedor = require("./fornecedor");

// Importa associações
require("./produtoFornecedor");

// Sincroniza tabelas com o banco
sequelize
  .sync({ alter: true })
  .then(() => console.log("Banco sincronizado com sucesso 🚀"))
  .catch((err) => console.error("Erro ao sincronizar banco:", err));

module.exports = { Produto, Fornecedor, sequelize };
