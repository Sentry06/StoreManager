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

- Cadastro de produtos
- Listagem de produtos
- Exclusão de produtos
- Integração com MongoDB Atlas
- API REST
- Interface em React
- Arquitetura em camadas

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

# 🌐 Endpoints da API

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

# 💾 Banco de Dados

Foi utilizado o **MongoDB Atlas** como banco de dados em nuvem.

A conexão é realizada através do Mongoose utilizando variáveis de ambiente.

---

# ⚙️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
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
- vite

---

# 📸 Funcionamento

Fluxo da aplicação:

1. O usuário preenche o formulário.
2. O React envia os dados utilizando Axios.
3. O Express recebe a requisição.
4. O Controller encaminha ao Service.
5. O Service utiliza o Repository.
6. O Repository salva os dados utilizando o Model do Mongoose.
7. O MongoDB Atlas armazena o documento.
8. O frontend atualiza automaticamente a lista de produtos.

---

# 🚀 Melhorias Futuras

Algumas funcionalidades podem ser adicionadas futuramente:

- Editar produtos
- Pesquisa de produtos
- Dashboard com estatísticas
- Filtro por categoria
- Upload de imagens
- Controle de estoque
- Paginação
- Autenticação de usuários
- Modo escuro

---

# 👨‍💻 Autor

**Igor Santos**

Projeto desenvolvido para a disciplina de **Desenvolvimento Full Stack**.
