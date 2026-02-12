const express = require("express");
const router = express.Router();
const fornecedorController = require("../controllers/fornecedorController");

// CRUD Fornecedor
router.post("/fornecedores", fornecedorController.criar);
router.get("/fornecedores", fornecedorController.listar);
router.put("/fornecedores/:id", fornecedorController.atualizar);
router.delete("/fornecedores/:id", fornecedorController.deletar);

module.exports = router;
