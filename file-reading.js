const fs = require("fs");

fs.readdir(".", (err, content) => {
  if (err) throw err;
  console.log(content);
});
fs.readFile("global.html", "UTF-8", (err, content) => {
  if (err) throw err;
  console.log(content);
});
