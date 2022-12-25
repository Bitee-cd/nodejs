const http = require("http");
const https = require("https");
const fs = require("fs");

const url = "https://jsonplaceholder.typicode.com/posts";

http
  .createServer((req, serverRes) => {
    if (req.method === "GET" && req.url === "/posts") {
      https.get(url, (httpRes) => {
        httpRes.on("data", (data) => {
          httpRes.setEncoding("utf8");
          serverRes.write(data);
        });
        httpRes.on("end", () => {
          serverRes.end();
          console.log("its over");
        });
      });
    } else {
      serverRes.writeHead(404, { "Content-Type": "application/plain" });
      serverRes.end("You hit the wrong url my friend");
    }
  })
  .listen(4444);
