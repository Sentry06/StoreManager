import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function StockBarChart({ products }) {
  const stockByCategory = {};

  products.forEach((product) => {
    const category = product.category;

    stockByCategory[category] =
      (stockByCategory[category] || 0) + Number(product.stock);
  });

  const data = {
    labels: Object.keys(stockByCategory),

    datasets: [
      {
        label: "Itens em estoque",

        data: Object.values(stockByCategory),

        backgroundColor: "#0d6efd",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Estoque por Categoria</h5>

        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default StockBarChart;
