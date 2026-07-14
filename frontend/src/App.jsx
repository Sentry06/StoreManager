import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

import { getProducts, deleteProduct } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Deseja excluir este produto?")) return;

    await deleteProduct(id);

    loadProducts();
  }

  return (
    <div className="container py-5">
      <Header />

      <ProductForm
        reloadProducts={loadProducts}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={setEditingProduct}
      />
    </div>
  );
}

export default App;
