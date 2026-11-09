const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

if (process.env.SKIP_DB_CONNECTION !== "true") {
  connectDatabase();
}

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Store Manager API funcionando 🚀",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "error",
    service: "storemanager-backend",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
