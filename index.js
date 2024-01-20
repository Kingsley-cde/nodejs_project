// const process = require("process");
// function myfunction(a) {
//   console.log(process.argv);
//   if (a > 5) {
//     console.log("The number you have given is greater than 5");
//   } else {
//     console.log("The number you have given is less or equal to 5");
//   }
// }
// myfunction(parseInt(process.argv[2]));

// const { error } = require("console");
// const fs = require("fs");
// fs.readFile("demo.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

import http from "http";
import open from "open";

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
      res.write("this is the home page");
    } else if (req.url == "/about") {
      res.write("this is the about page");
    } else if (req.url == "/contact") {
      res.write("this is the contact page");
    } else {
      res.write("this route does not exit");
    }
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.write("<h1>Hello nodejs! </h1>");
    res.end();
  })
  .listen(3000, () => {
    console.log("server listening for the request");
    //open("http://localhost:3000");
  });
