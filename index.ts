import http from "http";

const server = http.createServer((req, res) => {
  const host = req.headers.host;

  if (!host) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
    return;
  }

  const hostSplitted = host.split(".");

  if (hostSplitted.length > 2) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
    return;
  }

  if (hostSplitted.length === 1) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`This is the form!`);
    return;
  }

  const subdomain = hostSplitted[0];

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Subdomain: ${subdomain}`);
});

const PORT = 80;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
