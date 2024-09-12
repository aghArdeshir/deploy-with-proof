FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["sh", "-c" "npm i && node index.js"]

EXPOSE 80
