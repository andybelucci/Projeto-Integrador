const Produto = require("./produto");
const Fornecedor = require("./fornecedor");

Produto.belongsToMany(Fornecedor, { through: "ProdutoFornecedor" });
Fornecedor.belongsToMany(Produto, { through: "ProdutoFornecedor" });
