FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["sh", "-c", "npm i && node app.js"]

EXPOSE 80
