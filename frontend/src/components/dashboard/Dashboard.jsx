import {
  FaBoxes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaDollarSign,
} from "react-icons/fa";

import StatCard from "./StatCard";
import CategoryPieChart from "./CategoryPieChart";
import StockBarChart from "./StockBarChart";

function Dashboard({ products }) {
  const totalProducts = products.length;

  const availableProducts = products.filter((p) => p.available).length;

  const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 5).length;

  const stockValue = products.reduce(
    (total, p) => total + p.price * p.stock,
    0,
  );

  return (
    <div className="row mb-4">
      <StatCard
        title="Produtos"
        value={totalProducts}
        color="primary"
        icon={<FaBoxes />}
      />

      <StatCard
        title="Disponíveis"
        value={availableProducts}
        color="success"
        icon={<FaCheckCircle />}
      />

      <StatCard
        title="Estoque Baixo"
        value={lowStock}
        color="warning"
        icon={<FaExclamationTriangle />}
      />

      <StatCard
        title="Valor em Estoque"
        value={stockValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        color="dark"
        icon={<FaDollarSign />}
      />

      <div className="row mt-4">
        <div className="col-lg-6 mb-4">
          <CategoryPieChart products={products} />
        </div>

        <div className="col-lg-6 mb-4">
          <StockBarChart products={products} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
