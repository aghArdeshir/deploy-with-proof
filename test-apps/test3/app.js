const http = require("http");
const redis = require("redis");

const client = redis.createClient({
  url: "redis://redis:6379",
});

client.on("error", (err) => console.error("Redis Client Error", err));
client.on("connect", () => console.log("Redis client connected"));
client.on("ready", () => console.log("Redis client ready"));

client
  .connect()
  .then(async () => {
    await client.set("some-key", Math.random());
    await client.set("some-counter", 0);

    await setInterval(async () => {
      await client.set("some-key", Math.random());
    }, 1000);

    const server = http.createServer(async (req, res) => {
      console.log("Received request for:", req.url);
      await client.incr("some-counter");

      res.end(
        (await client.get("some-counter")) + (await client.get("some-key"))
      );
    });

    server.listen(80, () => {
      console.log("Server running at http://localhost:80/");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to Redis", err);
  });
