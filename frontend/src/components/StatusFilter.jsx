function StatusFilter({ statusFilter, setStatusFilter }) {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <label className="form-label fw-bold">Disponibilidade</label>

        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="available">Disponíveis</option>
          <option value="lowStock">Estoque baixo</option>
          <option value="outOfStock">Sem estoque</option>
        </select>
      </div>
    </div>
  );
}

export default StatusFilter;
