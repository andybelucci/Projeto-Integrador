const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const associacaoRoutes = require("./routes/associacaoRoutes");
const { sequelize } = require("./models");

app.use(express.json());

// Rotas
app.use("/api", produtoRoutes);
app.use("/api", fornecedorRoutes);
app.use("/api", associacaoRoutes);

// Testa conexão com banco
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao PostgreSQL ✅"))
  .catch((err) => console.error("Erro de conexão:", err));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
