# Multi-stage Dockerfile: build then serve static files
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
# Copy package files to satisfy any tooling and install a small static server
COPY package.json package-lock.json ./
RUN npm install -g serve@14 --silent
COPY --from=builder /app/build ./build
ENV PORT=3000
EXPOSE 3000
# Use shell form to allow env expansion for PORT
CMD ["sh", "-c", "npx serve -s build -l $PORT"]
