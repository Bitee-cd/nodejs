const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/about") {
    fs.readFile("./global.html", "UTF-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This is wrong");
  }
});

server.listen(3333);
