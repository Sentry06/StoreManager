import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Dashboard from "./components/dashboard/Dashboard";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import StatusFilter from "./components/StatusFilter";

import { getProducts, deleteProduct } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("recent");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingProduct, setEditingProduct] = useState(null);
  const [status, setStatus] = useState("all");

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description?.toLowerCase().includes(search.toLowerCase()) ||
      product.category?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "Todos" ? true : product.category === category;

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "available"
          ? product.available
          : statusFilter === "lowStock"
            ? product.stock > 0 && product.stock <= 5
            : product.stock === 0;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "recent":
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );
      break;

    case "az":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "za":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "lowPrice":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "highPrice":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "highStock":
      sortedProducts.sort((a, b) => b.stock - a.stock);
      break;

    case "lowStock":
      sortedProducts.sort((a, b) => a.stock - b.stock);
      break;

    default:
      break;
  }

  return (
    <div className="container py-5">
      <Header />

      <Dashboard products={products} />

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        category={category}
        setCategory={setCategory}
        products={products}
      />

      <StatusFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <SortBar sortBy={sortBy} setSortBy={setSortBy} />

      <ProductForm
        reloadProducts={loadProducts}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      <ProductList
        products={sortedProducts}
        onDelete={handleDelete}
        onEdit={setEditingProduct}
      />
    </div>
  );
}

export default App;
