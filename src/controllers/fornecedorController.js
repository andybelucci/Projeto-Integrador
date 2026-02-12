const Fornecedor = require("../models/fornecedor");

module.exports = {
  async criar(req, res) {
    try {
      const fornecedor = await Fornecedor.create(req.body);
      res.json(fornecedor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async listar(req, res) {
    const fornecedores = await Fornecedor.findAll();
    res.json(fornecedores);
  },

  async atualizar(req, res) {
    try {
      await Fornecedor.update(req.body, { where: { id: req.params.id } });
      res.json({ message: "Fornecedor atualizado com sucesso" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deletar(req, res) {
    await Fornecedor.destroy({ where: { id: req.params.id } });
    res.json({ message: "Fornecedor deletado" });
  },
};
