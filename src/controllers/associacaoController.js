const Produto = require("../models/produto");
const Fornecedor = require("../models/fornecedor");

module.exports = {
  async associar(req, res) {
    try {
      const { produtoId, fornecedorId } = req.body;
      const produto = await Produto.findByPk(produtoId);
      const fornecedor = await Fornecedor.findByPk(fornecedorId);

      if (!produto || !fornecedor) {
        return res
          .status(404)
          .json({ error: "Produto ou Fornecedor não encontrado" });
      }

      await produto.addFornecedor(fornecedor);
      res.json({ message: "Associação criada com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async listarAssociacoes(req, res) {
    const produtos = await Produto.findAll({ include: Fornecedor });
    res.json(produtos);
  },
};
