import { useState } from "react";
import { createProduct, updateProduct } from "../services/api";

const emptyForm = {
  name: "",
  description: "",
  category: "",
  price: "",
  stock: "",
  image: "",
  available: true,
};

function ProductForm({ reloadProducts, editingProduct, setEditingProduct }) {
  const [form, setForm] = useState(() => {
    if (!editingProduct) {
      return { ...emptyForm };
    }

    return {
      name: editingProduct.name ?? "",
      description: editingProduct.description ?? "",
      category: editingProduct.category ?? "",
      price: editingProduct.price ?? "",
      stock: editingProduct.stock ?? "",
      image: editingProduct.image ?? "",
      available: editingProduct.available ?? true,
    };
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    try {
      if (editingProduct) {
        await updateProduct(editingProduct._id, productData);
        setEditingProduct(null);
      } else {
        await createProduct(productData);
      }

      setForm({ ...emptyForm });
      await reloadProducts();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  }

  function handleCancelEdit() {
    setEditingProduct(null);
  }

  return (
    <div className="card shadow border-0">
      <div className="card-body">
        <h3 className="mb-4">
          {editingProduct ? "Editar Produto" : "Novo Produto"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="product-name">
              Nome
            </label>
            <input
              id="product-name"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="product-description">
              Descrição
            </label>
            <textarea
              id="product-description"
              className="form-control"
              rows="3"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="product-category">
                Categoria
              </label>
              <input
                id="product-category"
                className="form-control"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label" htmlFor="product-price">
                Preço
              </label>
              <input
                id="product-price"
                type="number"
                step="0.01"
                className="form-control"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label" htmlFor="product-stock">
                Estoque
              </label>
              <input
                id="product-stock"
                type="number"
                className="form-control"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="product-image">
              URL da imagem
            </label>
            <input
              id="product-image"
              className="form-control"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-check mb-4">
            <input
              id="product-available"
              type="checkbox"
              className="form-check-input"
              name="available"
              checked={form.available}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="product-available">
              Produto disponível
            </label>
          </div>

          <button className="btn btn-primary w-100 save-button">
            {editingProduct ? "Atualizar Produto" : "Salvar Produto"}
          </button>

          {editingProduct && (
            <button
              type="button"
              className="btn btn-secondary w-100 mt-2"
              onClick={handleCancelEdit}
            >
              Cancelar edição
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
