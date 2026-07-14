import {
  FaTrash,
  FaEdit,
  FaBox,
  FaTag,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div
      className="card shadow-sm border-0 h-100"
      style={{
        transition: "0.3s",
        borderRadius: "18px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover",
            transition: "0.35s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      )}

      <div className="card-body d-flex flex-column">
        <h4 className="fw-bold">{product.name}</h4>

        <div className="mb-3">
          <span className="badge bg-primary mb-3">
            <FaTag className="me-2" />
            {product.category}
          </span>
        </div>

        <div className="d-flex gap-2 flex-wrap mb-3">
          {product.stock === 0 && (
            <span className="badge bg-danger">Sem estoque</span>
          )}

          {product.stock > 0 && product.stock <= 5 && (
            <span className="badge bg-warning text-dark">Últimas unidades</span>
          )}

          {product.stock >= 20 && (
            <span className="badge bg-success">Grande estoque</span>
          )}
        </div>

        <p className="text-secondary flex-grow-1">{product.description}</p>

        <h3 className="fw-bold text-success mb-3">
          R$ {Number(product.price).toFixed(2)}
        </h3>

        <div className="mb-3">
          {product.available ? (
            <span className="badge bg-success">
              <FaCheckCircle className="me-2" />
              Disponível
            </span>
          ) : (
            <span className="badge bg-danger">
              <FaTimesCircle className="me-2" />
              Indisponível
            </span>
          )}
        </div>

        <p
          className={
            product.stock <= 5
              ? "text-danger fw-bold"
              : "text-secondary fw-semibold"
          }
        >
          <FaBox className="me-2" />
          Estoque: {product.stock} unidades
        </p>

        <div className="d-grid gap-2 mt-auto">
          <button className="btn btn-primary" onClick={() => onEdit(product)}>
            <FaEdit className="me-2" />
            Editar
          </button>

          <button
            className="btn btn-danger"
            onClick={() => onDelete(product._id)}
          >
            <FaTrash className="me-2" />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
