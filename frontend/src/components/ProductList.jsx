import ProductCard from "./ProductCard";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div className="row mt-5">
      {products.map((product) => (
        <div key={product._id} className="col-md-4 mb-4">
          <ProductCard product={product} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
