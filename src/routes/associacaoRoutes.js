const express = require("express");
const router = express.Router();
const associacaoController = require("../controllers/associacaoController");

// Associação Produto/Fornecedor
router.post("/associar", associacaoController.associar);
router.get("/associacoes", associacaoController.listarAssociacoes);

module.exports = router;
