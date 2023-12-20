FROM node:21.4.0-alpine

WORKDIR /app

COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install
EXPOSE 4000

WORKDIR /app

COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install
EXPOSE 5000

WORKDIR /app

COPY . .

CMD ["node", "run", "dev"]

