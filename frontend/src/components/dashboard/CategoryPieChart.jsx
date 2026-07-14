import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryPieChart({ products }) {
  const categories = {};

  products.forEach((product) => {
    const category = product.category;

    categories[category] = (categories[category] || 0) + 1;
  });

  const data = {
    labels: Object.keys(categories),

    datasets: [
      {
        label: "Produtos",

        data: Object.values(categories),

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
          "#20c997",
          "#fd7e14",
        ],

        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Produtos por Categoria</h5>

        <Pie data={data} />
      </div>
    </div>
  );
}

export default CategoryPieChart;
