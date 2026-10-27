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

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }

  useEffect(() => {
    let active = true;

    async function fetchProducts() {
      try {
        const data = await getProducts();

        if (active) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    fetchProducts();

    return () => {
      active = false;
    };
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Deseja excluir este produto?")) {
      return;
    }

    try {
      await deleteProduct(id);
      await loadProducts();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  }

  const filteredProducts = products.filter((product) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm) ||
      product.category?.toLowerCase().includes(searchTerm);

    const matchesCategory =
      category === "Todos" || product.category === category;

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
        key={editingProduct?._id ?? "new-product"}
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
