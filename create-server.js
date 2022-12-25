const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Hi guys my name is Caleb Bitiyong Duniya");
});
server.listen(8000);
