import { FaTrash } from "react-icons/fa";

function ProductCard({ product, onDelete }) {
  return (
    <div className="card shadow-sm border-0 h-100">
      {product.image && (
        <img
          src={product.image}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />
      )}

      <div className="card-body">
        <h5>{product.name}</h5>

        <p className="text-secondary mb-2">{product.category}</p>

        <p>{product.description}</p>

        <h4 className="text-success">R$ {Number(product.price).toFixed(2)}</h4>

        <p>Estoque: {product.stock}</p>

        <button
          className="btn btn-outline-danger w-100"
          onClick={() => onDelete(product._id)}
        >
          <FaTrash className="me-2" />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
