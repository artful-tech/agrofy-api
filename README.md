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

### Obrigatório

*   [Node.js](https://nodejs.org/en/) (v18 ou superior recomendado)
*   NPM (Node Package Manager). Obs: O NPM é instalado junto com o NodeJS de forma automática.

### Opcional (Altamente recomendado)

Para conseguir iniciar o servidor de banco de dados PostgreSQL localmente de forma fácil e rápida e se conectar com a aplicação de forma facilitada, instale o Docker:

*   [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)

---

## 📝 Preparativos

### Obrigatório

#### 1. Instale o [Node.js](https://nodejs.org/en/) no link:
[https://nodejs.org/en/](https://nodejs.org/en/)

#### 2. Após instalar o [Node.js](https://nodejs.org/en/), instale o compilador do typescript através do comando:
```bash
npm install -g typescript
```

### Opcional (Altamente recomendado)

#### 1. Instale o [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) no link: 
[https://docs.docker.com/desktop/setup/install/windows-install/](https://docs.docker.com/desktop/setup/install/windows-install/)

---

## 🚀 Como Rodar a Aplicação pela Primeira Vez

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

### 3. Acesse o drive da turma e faça o download das variáveis de ambiente (".env" e ".env.development").
<img src="images/1772977269895009905.webp" width="15px"> Essas variáveis carregam dados de acesso confidenciais, que não devem ser expostos em qualquer lugar ou armazenados em computadores públicos.

### 4. Copie e cole essas variáveis de ambiente para dentro da raíz do projeto agrofy-api, como demonstra a imagem abaixo:

<img src="images/files-screenshot.png">

### 5. Próxima Etapa: Formas para rodar a aplicação

### A. Produção

#### 1. Para rodar a aplicação em produção, basta executar os seguintes comandos:

```bash
npx prisma generate
```

```bash
npm run prod
```

### B. Desenvolvimento com Docker

#### 1. Vá para a branch "develop" com o comando:

```bash
git checkout develop
```

#### 2. Para rodar a aplicação em desenvolvimento é necessário ter um servidor de banco de dados PostgreSQL rodando. Para isso, após ter instalado o [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/), basta executar o seguinte comando:

```bash
docker-compose up
```

Obs: Esse comando sobe o container listado no arquivo "docker-compose.yml", criando o servidor de banco de dados com as informações de acesso exatas listadas no arquivo ".env.development", tornando a conexão da aplicação com o banco de dados simples e direta.

#### 3. Em seguida, com o servidor de banco de dados PostgreSQL rodando, execute o comando para gerar o prisma client:

```bash
npm run prisma:generate
```

#### 4. Em seguida, com o servidor de banco de dados PostgreSQL rodando, execute o comando para criar as tabelas:

```bash
npm run migrate:dev
```

#### 5. Para adicionar os dados de teste no banco de dados, execute o comando abaixo:

```bash
npm run seed:dev
```

#### 6. Agora, para rodar a aplicação, execute o comando:

```bash
npm run dev
```

---

### C. Desenvolvimento sem Docker

#### 1. Vá para a branch "develop" com o comando:

```bash
git checkout develop
```

#### 2. Para rodar a aplicação em desenvolvimento é necessário ter um servidor de banco de dados PostgreSQL rodando. Como não irá utilizar Docker, precisará instalar o PostgreSQL na sua máquina local, para isso instale o PostgreSQL no link [https://www.enterprisedb.com/downloads/postgres-postgresql-downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads):


#### 3. Após a instalação do PostgreSQL, crie o banco de dados no PgAdmin com o nome _"agrofy_dev"_ , e modifique o arquivo _".env.development"_ com o nome de usuário e senha que configurou no banco de dados. O arquivo _".env.development"_, vai ficar algo parecido com:

```.env.development
PORT=3000

DATABASE_URL="postgresql://seu-usuario:sua-senha@localhost:5432/agrofy_dev"
```

<img src="images/1772977269895009905.webp" width="15px"> Pode ser que haja algum problema com algum usuário que você tenha adicionado posteriormente, por isso é recomendado que utilize o usuário padrão do PostgreSQL, que é o usuário _"postgres"_.

#### 4. Após os passos anteriores, com o servidor de banco de dados PostgreSQL rodando, execute o comando para gerar o prisma client:

```bash
npm run prisma:generate
```

#### 5. Em seguida, execute o comando para criar as tabelas no banco de dados:

```bash
npm run migrate:dev
```

#### 6. Para adicionar os dados de teste no banco de dados, execute o comando abaixo:

```bash
npm run seed:dev
```

#### 7. Agora, para rodar a aplicação, execute o comando:

```bash
npm run dev
```

---
<br>

## ❓ Objetivos por comandos

### A. Para somente rodar a aplicação:

```bash
npm run dev
```

### B. Para atualizar as tabelas do banco de dados:

```bash
npm run migrate:dev
```

### C. Para gerar um novo prisma client, que é utilizado como interface do banco de dados para a aplicação:

```bash
npm run prisma:generate
```

### D. Para limpar os dados de teste do banco de dados e adicionar novos dados de teste:

```bash
npm run seed:dev
```

### E. Mudar de branch local no Git:

```bash
git checkout nome-da-branch
```

### F. Verificar nome das branchs locais:

```bash
git branch
```

### G. Criar uma nova branch:

```bash
git branch nome-da-branch
```

---
<br>

## 🛣️ Endpoints Principais

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/farms` | Lista todas as propriedades rurais de Maricá |
| `POST` | `/api/farm` | Cria uma nova propriedade agrícola no sistema |
| `DELETE` | `/api/farm/:id` | Exclui uma propriedade do sistema |
| `PATCH` | `/api/farm/:id` | Edita os dados cadastrais (nome, área, local) de uma fazenda |
| `GET` | `/api/plots` | Lista os lotes vinculados a uma fazenda |
| `POST` | `/api/plot` | Cria um novo lote vinculado a uma fazenda |
| `DELETE` | `/api/plot/:id` | Exclui um lote vinculado a uma fazenda |
| `PATCH` | `/api/plot/:id` | Edita as características de um lote existente |
| `GET` | `/api/crops` | Retorna o catálogo completo de vegetais e ciclos botânicos |
| `POST` | `/api/crop` | Cria um novo tipo de cultura no catálogo (ex: Alface Vanda) |
| `DELETE` | `/api/crop/:id` | Exclui uma cultura do catálogo de vegetais |
| `PATCH` | `/api/crop/:id` | Edita informações de uma cultura no catálogo |
| `POST` | `/api/seasons` | Inicia um novo ciclo de plantio vinculado a um lote |
| `POST` | `/api/season` | Atalho para criação de um novo ciclo de plantio |
| `DELETE` | `/api/season/:id` | Exclui o registro de uma safra (ciclo produtivo) específica |
| `PATCH` | `/api/seasons/:id` | Atualiza o status da safra (ex: marcar como "Colhido") |
| `GET` | `/api/inventory` | Exibe o saldo atual de todas as sementes e insumos |
| `POST` | `/api/inventory` | Registra a entrada de novos materiais no estoque |
| `DELETE` | `/api/inventory/:id` | Deleta permanentemente sementes ou insumos do catálogo |
| `PATCH` | `/api/inventory/:id` | Edita o saldo atual ou detalhes técnicos de um insumo |
| `GET` | `/api/inventory/alerts` | Lista itens com estoque abaixo do nível de segurança |
| `POST` | `/api/finances/expenses` | Registra uma nova conta paga ou gasto (BRL ou Mumbuca) |
| `GET` | `/api/finances/summary` | Resumo mensal consolidado de gastos em BRL e Mumbuca |
| `POST` | `/api/logs` | Registra um evento ou observação no diário de campo |
| `GET` | `/api/team` | Lista os membros e responsabilidades do time Agrofy |

---

## 📂 Estrutura de Pastas

```text
AGROFY-API
├── docs
├── images
├── node_modules
├── prisma
├── public
├── src
│   ├── controllers
│   ├── lib
│   ├── models
│   ├── repositories
│   ├── routers
│   ├── app.ts
│   └── server.ts
├── .env
├── .env.development
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── LICENSE
├── package-lock.json
├── package.json
├── prisma.config.ts
├── README.md
└── tsconfig.json
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


## Modelo Entidade Relacionamento

```mermaid

erDiagram
    FARM ||--o{ PLOT : "possui"
    PLOT ||--o{ SEASON : "recebe"
    CROP ||--o{ SEASON : "eh_plantada_em"
    SEASON ||--o{ FIELD_LOG : "registra"
    
    FARM {
        string id PK
        string name
        string ownerName
        float totalArea
        string location
        string address
        datetime createdAt
        datetime updatedAt
    }

    PLOT {
        string id PK
        string name
        float area
        string soilType
        string farmId FK
        datetime createdAt
        datetime updatedAt
    }

    CROP {
        string id PK
        string name
        string variety
        int daysToHarvest
        datetime createdAt
        datetime updatedAt
    }

    SEASON {
        string id PK
        string status
        datetime plantedAt
        datetime harvestAt
        string plotId FK
        string cropId FK
        datetime createdAt
        datetime updatedAt
    }

    FIELD_LOG {
        string id PK
        string description
        string category
        datetime date
        string seasonId FK
    }

    INVENTORY_ITEM {
        string id PK
        string name
        string category
        float quantity
        string unit
        float minStock
        datetime createdAt
        datetime updatedAt
    }

    EXPENSE {
        string id PK
        string description
        float amount
        string currency
        datetime date
        string category
        datetime createdAt
        datetime updatedAt
    }
```