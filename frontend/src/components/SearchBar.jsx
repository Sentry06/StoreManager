import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <label className="form-label fw-bold">Pesquisar Produtos</label>

        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome do produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
