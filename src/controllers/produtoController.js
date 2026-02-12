const Produto = require("../models/produto");

module.exports = {
  async criar(req, res) {
    try {
      const produto = await Produto.create(req.body);
      res.json(produto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async listar(req, res) {
    const produtos = await Produto.findAll();
    res.json(produtos);
  },

  async atualizar(req, res) {
    try {
      await Produto.update(req.body, { where: { id: req.params.id } });
      res.json({ message: "Produto atualizado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    await Produto.destroy({ where: { id: req.params.id } });
    res.json({ message: "Produto deletado" });
  },
};
