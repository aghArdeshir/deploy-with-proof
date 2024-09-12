const http = require("http");

const server = http.createServer((req, res) => {
  const randomNumber = Math.random();
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Random Number: ${randomNumber}`);
});

server.listen(80, () => {
  console.log("Server running at http://localhost:80/");
});
