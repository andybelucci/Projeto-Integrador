const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

// CRUD Produto
router.post("/produtos", produtoController.criar);
router.get("/produtos", produtoController.listar);
router.put("/produtos/:id", produtoController.atualizar);
router.delete("/produtos/:id", produtoController.deletar);

module.exports = router;
