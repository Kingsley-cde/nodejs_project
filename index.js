const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

// http
//   .createServer((request, response) => {
//     const file = fs.readFileSync(__dirname + "/views/home.ejs", "utf8");
//     const output = ejs.render(file, { name: "kingsley" });
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end(output);
//   })
//   .listen(3000);

http
  .createServer((request, response) => {
    const file = fs.readFileSync(__dirname + "/views/hobbies.ejs", "utf8");
    const output = ejs.render(file, {
      data: {
        name: "kingsley",
        hobbies: ["football", "reading", "basketball"],
      },
    });
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(output);
  })
  .listen(3000);
