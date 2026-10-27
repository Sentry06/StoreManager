# 🛒 StoreManager

Sistema de gerenciamento de produtos desenvolvido como atividade da disciplina de **Desenvolvimento Full Stack**.

A aplicação permite cadastrar, listar e excluir produtos utilizando uma arquitetura Full Stack com **React**, **Node.js**, **Express** e **MongoDB Atlas**.

---

# 📚 Tecnologias Utilizadas

## Frontend

- React
- Vite
- Axios
- Bootstrap 5

## Backend

- Node.js
- Express
- Mongoose
- MongoDB Atlas
- CORS
- Dotenv

---

# 🏗️ Arquitetura do Projeto

```
StoreManager
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── database
│   │   ├── models
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ✅ Funcionalidades

Atualmente a aplicação possui:

- ✅ Cadastro de produtos
- ✅ Listagem de produtos
- ✅ Exclusão de produtos
- ✅ **Edição de produtos**
- ✅ **Busca em tempo real** por nome, descrição e categoria
- ✅ **Filtro por categoria** com opção "Todos"
- ✅ **Filtro por status de estoque** (Disponível, Estoque Baixo, Sem Estoque)
- ✅ **Ordenação de produtos** (recentes, nome A-Z, nome Z-A, menor preço, maior preço, maior estoque, menor estoque)
- ✅ **Dashboard com estatísticas** (Total de produtos, Disponíveis, Estoque Baixo, Valor Total em Estoque)
- ✅ **Gráfico de Pizza** mostrando distribuição por categoria
- ✅ **Gráfico de Barras** mostrando estoque por categoria
- ✅ **Controle de estoque** com validação
- ✅ Integração com MongoDB Atlas
- ✅ API REST completa
- ✅ Interface em React com Vite
- ✅ Arquitetura em camadas

---

# 🗂️ Estrutura do Backend

O backend foi desenvolvido seguindo uma arquitetura em camadas.

```
Routes

↓

Controller

↓

Service

↓

Repository

↓

Model

↓

MongoDB Atlas
```

Cada camada possui uma responsabilidade específica.

### Routes

Responsável por definir as rotas da API.

### Controller

Recebe as requisições HTTP e envia as respostas.

### Service

Contém as regras de negócio da aplicação.

### Repository

Realiza o acesso ao banco de dados.

### Model

Define o modelo dos documentos utilizando Mongoose.

---

# � Estrutura do Frontend

O frontend foi desenvolvido em React com Vite, possuindo uma organização bem estruturada:

```
Components

├── SearchBar.jsx          (Busca em tempo real)
├── FilterBar.jsx          (Filtro por categoria)
├── StatusFilter.jsx       (Filtro por status de estoque)
├── SortBar.jsx            (Múltiplas opções de ordenação)
├── ProductForm.jsx        (Formulário para criar/editar produtos)
├── ProductList.jsx        (Lista de produtos)
├── ProductCard.jsx        (Cartão individual de produto)
├── Header.jsx             (Cabeçalho da aplicação)
├── dashboard/
│   ├── Dashboard.jsx      (Dashboard principal com estatísticas)
│   ├── StatCard.jsx       (Cartões de estatísticas)
│   ├── CategoryPieChart.jsx   (Gráfico de pizza)
│   └── StockBarChart.jsx      (Gráfico de barras)
└── ...

```

### Componentes Principais

**SearchBar**: Busca em tempo real por nome, descrição e categoria.

**FilterBar**: Filtro dinâmico por categorias extraídas dos produtos.

**StatusFilter**: Filtro avançado por status (Disponível, Estoque Baixo, Sem Estoque).

**SortBar**: 7 opções de ordenação (Recentes, Nome A-Z, Nome Z-A, Menor Preço, Maior Preço, Maior Estoque, Menor Estoque).

**Dashboard**: Visualização de estatísticas com cartões informativos e gráficos (Pizza e Barras).

**ProductForm**: Formulário inteligente para criar novos produtos ou editar produtos existentes.

# �🌐 Endpoints da API

## Listar produtos

GET

```
/api/products
```

---

## Buscar produto

GET

```
/api/products/:id
```

---

## Cadastrar produto

POST

```
/api/products
```

---

## Atualizar produto

PUT

```
/api/products/:id
```

---

## Excluir produto

DELETE

```
/api/products/:id
```

---

# � Funcionalidades de Busca e Filtro

## Busca em Tempo Real

A busca funciona simultaneamente em:

- Nome do produto
- Descrição
- Categoria

## Filtros Disponíveis

### Filtro por Categoria

- Lista dinâmica de categorias extraídas dos produtos
- Opção "Todos" para visualizar produtos de todas as categorias

### Filtro por Status de Estoque

- **Todos**: Mostra todos os produtos
- **Disponíveis**: Produtos com stock > 0
- **Estoque Baixo**: Produtos com 0 < stock <= 5
- **Sem Estoque**: Produtos com stock = 0

## Ordenação

7 opções de ordenação disponíveis:

1. **Mais Recentes**: Ordenação por data de criação (descrescente)
2. **Nome (A-Z)**: Ordem alfabética crescente
3. **Nome (Z-A)**: Ordem alfabética decrescente
4. **Menor Preço**: Ordenação crescente de preço
5. **Maior Preço**: Ordenação decrescente de preço
6. **Maior Estoque**: Produtos com maior quantidade em estoque
7. **Menor Estoque**: Produtos com menor quantidade em estoque

---

# 📊 Dashboard e Visualizações

O dashboard exibe:

### Cartões de Estatísticas

- **Total de Produtos**: Quantidade total de itens cadastrados
- **Produtos Disponíveis**: Produtos com stock > 0
- **Estoque Baixo**: Produtos com quantidade crítica (≤ 5 unidades)
- **Valor Total em Estoque**: Somatório de (preço × quantidade) em BRL

### Gráficos

**Gráfico de Pizza**: Distribuição de produtos por categoria

**Gráfico de Barras**: Total de itens em estoque por categoria

---

# �💾 Banco de Dados

Foi utilizado o **MongoDB Atlas** como banco de dados em nuvem.

A conexão é realizada através do Mongoose utilizando variáveis de ambiente.

---

# ⚙️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/Sentry06/StoreManager.git
```

---

## 2. Entrar na pasta do projeto

```bash
cd StoreManager
```

---

# Backend

Entrar na pasta

```bash
cd backend
```

Instalar as dependências

```bash
npm install
```

Criar um arquivo chamado

```
.env
```

Adicionar as seguintes variáveis:

```env
PORT=3000

MONGO_URI=sua_string_de_conexao_do_mongodb
```

Executar o servidor

```bash
npm run dev
```

O backend ficará disponível em:

```
http://localhost:3000
```

---

# Frontend

Abrir outro terminal.

Entrar na pasta

```bash
cd frontend
```

Instalar as dependências

```bash
npm install
```

Executar

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

# 📦 Dependências utilizadas

## Backend

- express
- mongoose
- cors
- dotenv
- nodemon

## Frontend

- react
- react-dom
- axios
- bootstrap
- react-icons
- react-chartjs-2
- chart.js
- react-toastify
- vite

---

# 📸 Funcionamento

## Fluxo de Criação/Edição de Produtos

1. O usuário preenche o formulário (nome, descrição, categoria, preço, estoque, imagem).
2. Ao enviar, o React valida os dados.
3. O Axios envia a requisição (POST para criar, PUT para editar).
4. O Express recebe a requisição no controller.
5. O Controller encaminha ao Service.
6. O Service realiza validações de negócio.
7. O Service utiliza o Repository.
8. O Repository salva/atualiza os dados usando o Model do Mongoose.
9. O MongoDB Atlas armazena o documento.
10. O frontend atualiza a lista de produtos automaticamente.

## Fluxo de Busca e Filtro

1. O usuário interage com SearchBar, FilterBar, StatusFilter ou SortBar.
2. Os valores são armazenados no estado React.
3. O App.jsx aplica os filtros e ordenação em tempo real.
4. A lista é renderizada com ProductList e ProductCard.

## Visualização de Dashboard

1. O Dashboard.jsx carrega os produtos via API.
2. Calcula estatísticas (total, disponíveis, estoque baixo, valor total).
3. Extrai categorias dos produtos.
4. Chart.js renderiza os gráficos (Pizza e Barras).
5. Exibe informações em tempo real com atualização automática.

---

# 🚀 Melhorias Futuras

Algumas funcionalidades podem ser adicionadas futuramente:

- Upload de imagens com preview
- Paginação de produtos
- Autenticação de usuários
- Controle de permissões (Admin/Usuário)
- Modo escuro
- Relatórios avançados em PDF
- Sistema de notificações por email
- Integração com sistema de pagamento

---

# 👨‍💻 Autor

**Igor Santos**

Projeto desenvolvido para a disciplina de **Desenvolvimento Full Stack**.
