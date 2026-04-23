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

---

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

### B. Para iniciar os containers:

```bash
docker compose up
```

### C. Para parar os containers:

```bash
docker compose down
```

### D. Para parar os containers e excluir o volume:

```bash
docker compose down -v
```

### E. Para atualizar as tabelas do banco de dados:

```bash
npm run migrate:dev
```

### F. Para gerar um novo prisma client, que é utilizado como interface do banco de dados para a aplicação:

```bash
npm run prisma:generate
```

### G. Para limpar os dados de teste do banco de dados e adicionar novos dados de teste:

```bash
npm run seed:dev
```

### H. Mudar de branch local no Git:

```bash
git checkout nome-da-branch
```

### J. Verificar nome das branchs locais:

```bash
git branch
```

### K. Criar uma nova branch:

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
  `POST` | `/api/auth/signin` | Faz a autenticação do usuário na aplicação |
  `POST` | `/api/user/signup` | Faz um novo cadastro do usuário na aplicação |
  `GET` | `/api/user` | Lista os dados básicos do usuário conectado |

---

## 📂 Estrutura de Pastas

```
.AGROFY-API
├── docker-compose.yml        # Descreve o container do banco de dados
├── Dockerfile                # Arquivo para preparar container para o deploy
├── docs                      # Documentação técnica, PDF do MVP e fluxogramas
├── images                    # Assets estáticos e screenshots para o README
├── LICENSE
├── package.json
├── prisma                    # Esse é o ORM que se comunica com o banco de dados
│   ├── migrations            # Histórico de alterações estruturais do banco (SQL)
│   ├── schema.prisma         # Definição das tabelas, Enums e relações (Fonte da verdade)
│   └── seed.ts               # Scripts para popular o banco com dados de teste/iniciais
├── src
│   ├── app.ts                # Configuração do Express (middlewares, rotas e instâncias)
│   ├── core                  # CAMADA DE DOMÍNIO: Regras de negócio puras e abstrações
│   │   ├── errors            # Classes de exceções customizadas (ex: AppError)
│   │   ├── models            # Entidades de domínio e Mappers (tradução de tipos)
│   │   ├── repositories      # Implementação da comunicação direta com o banco (Prisma)
│   │   │   └── interfaces    # Contratos (tipos) que os repositórios devem seguir
│   │   └── usecases          # Lógica de negócio (onde a mágica do Agrofy acontece)
│   │       └── interfaces    # Definição das entradas e saídas de cada caso de uso
│   ├── infra                 # CAMADA DE INFRAESTRUTURA: Ferramentas externas e HTTP
│   │   ├── database          # Configuração e conexão com o banco de dados (Prisma Client)
│   │   ├── factories         # Injeção de dependência: onde você "monta" as peças das rotas
│   │   ├── http              # Tudo relacionado ao protocolo HTTP
│   │   │   ├── controllers   # Recebem a requisição, chamam o UseCase e dão a resposta
│   │   │   ├── middlewares   # Filtros de requisição: Erros, Validação (Zod) e Auth
│   │   │   └── routers       # Definição dos endpoints (URLs) da aplicação
│   │   └── services          # Integrações externas (E-mail, APIs de terceiros, Clima)
│   ├── server.ts             # Ponto de entrada: inicia o servidor e escuta a porta (8080)
│   ├── shared                # Recursos compartilhados por todas as camadas
│   │   ├── dtos              # Schemas de validação (Zod) e interfaces de entrada/saída
│   │   └── utils             # Funções utilitárias genéricas (datas, moedas, logs)
│   └── views                 # Arquivos que serão servidos para o cliente final
│       └── pages             # HTMLs estáticos e templates de visualização
└── tsconfig.json             # Configurações do compilador TypeScript e Aliases (@)
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
    USER ||--o| PEOPLE : "possui"
    PEOPLE ||--o| MANAGER : "pode ser"
    PEOPLE }|--o{ PEOPLE_ON_FARMS : "vinculado"
    FARM ||--o{ PEOPLE_ON_FARMS : "vinculado"
    ADDRESS ||--o| FARM : "localiza"
    FARM ||--o{ PLOT : "contem"
    FARM ||--o{ INVENTORY_ITEM : "estoca"
    PLOT ||--o{ SEASON : "recebe"
    CROP ||--o{ SEASON : "cultivada em"
    SEASON ||--o{ FIELD_LOG : "gera"
    SEASON ||--o{ TRANSACTION : "vinculada a"
    MANAGER ||--o{ TRANSACTION : "realiza"
    MANAGER ||--o| FINANCE : "gere"

    USER {
        string id PK
        string email UK
        string password
        datetime createdAt
    }

    PEOPLE {
        string id PK
        string name
        string cellphone
        Role role
        string userId FK
    }

    MANAGER {
        string id PK
        string peopleId FK
    }

    ADDRESS {
        string id PK
        string city
        string neighborhood
        string state
    }

    FARM {
        string id PK
        string name
        float totalArea
        string addressId FK
    }

    PEOPLE_ON_FARMS {
        string peopleId PK, FK
        string farmId PK, FK
    }

    PLOT {
        string id PK
        string name
        float area
        string farmId FK
    }

    CROP {
        string id PK
        string name
        string variety
        int daysToHarvest
    }

    SEASON {
        string id PK
        SeasonStatus status
        string plotId FK
        string cropId FK
        datetime harvestAt
    }

    FIELD_LOG {
        string id PK
        string description
        LogCategory category
        string seasonId FK
    }

    INVENTORY_ITEM {
        string id PK
        string name
        float quantity
        string unit
        string farmId FK
    }

    TRANSACTION {
        string id PK
        string description
        decimal amount
        TransactionType type
        string managerId FK
        string seasonId FK
    }

    FINANCE {
        string id PK
        decimal balance
        string managerId FK
    }
```