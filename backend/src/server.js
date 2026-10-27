const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
require("dotenv").config();
const = "erro-intencional";

const productRoutes = require("./routes/productRoutes");

const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Store Manager API funcionando 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});