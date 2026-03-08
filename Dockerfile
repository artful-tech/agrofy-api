# Estágio 1: Build
FROM node:24-slim AS builder

# Instalar dependências para o Prisma (necessárias em ambientes slim)
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

# Instalar todas as dependências (incluindo as de desenvolvimento)
RUN npm install

# Gerar o Prisma Client
RUN npx prisma generate

# Copiar o restante do código e compilar
COPY . .
RUN npx tsc

# --- Estágio 2: Execução ---
FROM node:24-slim AS runner

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Definir variável de ambiente solicitada
ENV DATABASE_URL="postgres://4065e26c9d39c714675a6d6ecd95ebb734dd1c7808272f4cf157ab1c932f5d8c:sk_s0KikyS4BylpBQD4tZ5pX@db.prisma.io:5432/postgres?sslmode=verify-full"
ENV NODE_ENV=production

# Copiar apenas o necessário do estágio de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./dist/public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# O Cloud Run exige que o app escute na porta definida pela variável PORT (padrão 8080)
EXPOSE 8080

# Comando para rodar as migrações e iniciar o servidor
# Nota: "prisma migrate" aplica as migrações sem precisar de interação
CMD node dist/src/server.js