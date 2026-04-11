# # Estágio 1: Build
# FROM node:25.9-slim AS builder

# # Instalar dependências para o Prisma (necessárias em ambientes slim)
# RUN apt-get update -y && apt-get install -y openssl

# WORKDIR /app

# # Copiar arquivos de configuração
# COPY package*.json ./                                            
# COPY tsconfig.json ./                                             
# COPY prisma ./prisma/                                             

# # Instalar todas as dependências (incluindo as de desenvolvimento)
# RUN npm install

# # Gerar o Prisma Client
# RUN npx prisma generate

# # Copiar o restante do código e compilar
# COPY . .
# # RUN npx tsc                                                       ####
# RUN npm run compile

# # --- Estágio 2: Execução ---
# FROM node:25.9-slim AS runner

# RUN apt-get update -y && apt-get install -y openssl

# WORKDIR /app

# # Definir variável de ambiente solicitada                                 ####
# ENV NODE_ENV=production

# # Copiar apenas o necessário do estágio de build
# COPY --from=builder /app/package*.json ./                    
# COPY --from=builder /app/dist ./dist                            
# COPY --from=builder /app/node_modules ./node_modules                                    

# # O Cloud Run exige que o app escute na porta definida pela variável PORT (padrão 8080)
# EXPOSE 8080

# # Comando para rodar as migrações e iniciar o servidor
# # Nota: "prisma migrate" aplica as migrações sem precisar de interação
# CMD node dist/src/server.js

# Estágio 1: Build
FROM node:25.9-slim AS builder

# Instalar dependências para o Prisma
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

# Instala TUDO para compilar
RUN npm install

# Gerar o Prisma Client
RUN npx prisma generate

COPY . .
RUN npm run compile

# --- Estágio 2: Limpeza de Dependências ---
# Criamos um estágio intermediário só para ter os módulos de produção limpos
FROM node:25.9-slim AS deps-prod
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
# Instala apenas o que é estritamente necessário para rodar
RUN npm install --omit=dev 
# Gera o client novamente para este ambiente
RUN npx prisma generate

# --- Estágio 3: Runner (Imagem Final) ---
FROM node:25.9-slim AS runner

# Essencial para o Prisma rodar em imagens slim
RUN apt-get update -y && apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
ENV NODE_ENV=production

# Copiamos apenas o código compilado e os módulos de produção
COPY --from=builder /app/dist ./dist
COPY --from=deps-prod /app/node_modules ./node_modules
COPY --from=deps-prod /app/package*.json ./

EXPOSE 8080

CMD node dist/src/server.js