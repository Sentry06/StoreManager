function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <label className="form-label fw-bold">Ordenar por</label>

        <select
          className="form-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="recent">Mais recentes</option>
          <option value="az">Nome (A-Z)</option>
          <option value="za">Nome (Z-A)</option>
          <option value="lowPrice">Menor preço</option>
          <option value="highPrice">Maior preço</option>
          <option value="highStock">Maior estoque</option>
          <option value="lowStock">Menor estoque</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;
