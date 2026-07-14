function FilterBar({ category, setCategory, products }) {
  const categories = [
    "Todos",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <label className="form-label fw-bold">Categoria</label>

        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
