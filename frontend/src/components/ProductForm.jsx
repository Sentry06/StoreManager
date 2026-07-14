import { useEffect, useState } from "react";
import { createProduct, updateProduct } from "../services/api";

function ProductForm({ reloadProducts, editingProduct, setEditingProduct }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    available: true,
  });

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        description: editingProduct.description,
        category: editingProduct.category,
        price: editingProduct.price,
        stock: editingProduct.stock,
        image: editingProduct.image,
        available: editingProduct.available,
      });
    }
  }, [editingProduct]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    if (editingProduct) {
      await updateProduct(editingProduct._id, productData);
      setEditingProduct(null);
    } else {
      await createProduct({ ...productData });
    }

    setForm({
      name: "",
      description: "",
      category: "",
      price: "",
      stock: "",
      image: "",
      available: true,
    });

    reloadProducts();
  }

  return (
    <div className="card shadow border-0">
      <div className="card-body">
        <h3 className="mb-4">
          {editingProduct ? "Editar Produto" : "Novo Produto"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>

            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descrição</label>

            <textarea
              className="form-control"
              rows="3"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Categoria</label>

              <input
                className="form-control"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label">Preço</label>

              <input
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
              <label className="form-label">Estoque</label>

              <input
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
            <label className="form-label">URL da imagem</label>

            <input
              className="form-control"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              name="available"
              checked={form.available}
              onChange={handleChange}
            />

            <label className="form-check-label">Produto disponível</label>
          </div>

          <button className="btn btn-primary w-100 save-button">
            {editingProduct ? "Atualizar Produto" : "Salvar Produto"}
          </button>

          {editingProduct && (
            <button
              type="button"
              className="btn btn-secondary w-100 mt-2"
              onClick={() => {
                setEditingProduct(null);

                setForm({
                  name: "",
                  description: "",
                  category: "",
                  price: "",
                  stock: "",
                  image: "",
                  available: true,
                });
              }}
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
