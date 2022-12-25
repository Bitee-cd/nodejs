const fs = require("fs");

fs.writeFile(
  "data.html",
  `\n Hello this file has just been created \n`,
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("your file has been saved");
  }
);
fs.appendFile(
  "data.html",
  `\n extra data appended to this file \n`,
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("your file has been appended");
  }
);
