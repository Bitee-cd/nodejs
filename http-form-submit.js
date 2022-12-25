const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let body = "";
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./html-form.html", "utf8", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else if (req.method === "POST") {
      let body = "";
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(body, () => {
          res.end();
        });
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("please enter a protected url");
      res.end();
    }
  })
  .listen(4444);

console.log("server is running");
