# Gerar imagem com todos node_modules
FROM rldourado/node20-pnpm AS modules_dev
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --silent

# Apenas node_modules de produção
FROM rldourado/node20-pnpm AS modules_prod
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --silent --prod

# Gerar dist da aplicação
FROM rldourado/node20-pnpm AS dist_prod
WORKDIR /app
RUN apk add jq
ENV NODE_ENV production
COPY --from=modules_dev /app/node_modules /app/node_modules
COPY package.json pnpm-lock.yaml tsconfig.json .npmrc ./
COPY src/ src/
RUN pnpm run build

# Gerar imagem para produção
FROM rldourado/node20-pnpm AS app
RUN apk add dumb-init
RUN apk add tzdata
ENV TZ=America/Sao_Paulo
WORKDIR /app
COPY --from=modules_prod /app/node_modules /app/node_modules
COPY --from=dist_prod /app/build /app/build
COPY package.json .
EXPOSE 6060
CMD ["dumb-init", "node", "build/server.js"]
