const assert = require("node:assert/strict");

const API_URL = process.env.API_URL || "http://localhost:3000/health";

async function testHealthCheck() {
  console.log("Iniciando teste de saúde da API...");

  const response = await fetch(API_URL);

  assert.equal(response.status, 200, "A API deveria retornar HTTP 200");

  const data = await response.json();

  assert.equal(data.status, "ok", "O status deveria ser ok");

  assert.equal(
    data.service,
    "storemanager-backend",
    "O serviço deveria ser storemanager-backend",
  );

  console.log("Teste aprovado! API respondendo corretamente.");
}

testHealthCheck().catch((error) => {
  console.error("Teste falhou:", error.message);
  process.exit(1);
});
