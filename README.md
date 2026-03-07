# 🚜 Agrofy API 🚀

Uma API robusta e escalável construída com Node.js e TypeScript para o ecossistema **Agrofy**.

---

## 🧐 Sobre o Projeto

A **Agrofy API** é o coração da nossa plataforma, fornecendo endpoints eficientes para o gerenciamento de usuários e integração de dados agrícolas. Desenvolvida seguindo os princípios de Clean Architecture e SOLID para garantir manutenibilidade e performance.

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza o que há de mais moderno no ecossistema JavaScript:

*   **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript.
*   **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para maior segurança.
*   **[Express 5](https://expressjs.com/)** - Framework web rápido e minimalista.
*   **[Helmet](https://helmetjs.github.io/)** - Segurança reforçada através de headers HTTP.
*   **[Morgan](https://github.com/expressjs/morgan)** - Logger de requisições HTTP.
*   **[Cors](https://github.com/expressjs/cors)** - Configuração de segurança para acesso cross-origin.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

*   [Node.js](https://nodejs.org/en/) (v18 ou superior recomendado)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🚀 Como Rodar a Aplicação

Siga o passo a passo abaixo para colocar a API no ar:

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/agrofy-api.git
cd agrofy-api
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3000
```

### 4. Executar o projeto

#### 👨‍💻 Em modo de desenvolvimento (Auto-reload)
```bash
npm run dev
```

#### 🏗️ Build (Compilar TypeScript para JavaScript)
```bash
npm run compile
```

#### 🏁 Iniciar em produção (Após o build)
```bash
npm start
```

---

## 🛣️ Endpoints Principais

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/users/:id` | Retorna os detalhes de um usuário específico |

---

## 📂 Estrutura de Pastas

```text
src/
├── controllers/    # Lógica de controle das rotas
├── models/         # Definições de dados (Interfaces/Types)
├── repositories/   # Acesso a dados e persistência
├── routers/        # Definição das rotas da API
├── app.ts          # Configuração do Express
└── server.ts       # Inicialização do servidor
```

---

## 🤝 Contribuição

1. Faça um **Fork** do projeto.
2. Crie uma nova **Branch** com sua feature (`git checkout -b feature/MinhaFeature`).
3. Faça **Commit** das suas alterações (`git commit -m 'Adicionando nova feature'`).
4. Faça **Push** para a Branch (`git push origin feature/MinhaFeature`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---

<p align="center">
  Feito com ❤️ pela equipe Agrofy 🌿
</p>
