FROM node:21.4.0-alpine

WORKDIR /app

COPY server/package.json ./server/
COPY client/package.json ./client/
RUN cd server && npm install
RUN cd client && npm install
COPY . .

EXPOSE 4000 5000

CMD ["npm", "run", "dev"]

