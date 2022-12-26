const express = require("express");
const app = express();
const port = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});
app.get("/api/", (req, res) => {
  res.send("<h1>Api is working!</h1>");
});

app.listen(port);
console.log("It is working");
