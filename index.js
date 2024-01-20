const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// mimeType Object maps each extension to its appropriate content type
const mimeType = {
  ".ico": "image/x-icon",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".wav": "audio/wav",
  ".mp3": "audio/mpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".doc": "application/msword",
  ".eot": "application/vnd.ms-fontobject",
  ".ttf": "application/x-font-ttf",
};

http
  .createServer((request, response) => {
    // Parse URL
    let parsedURL = url.parse(request.url, true);
    console.log(request.url);
    console.log(parsedURL);
    // Remove Extra characters (for example /index.html/ becomes index.html)
    let file_path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    // Serve index.html as default file
    if (file_path == "") {
      file_path = "index.html";
    }

    // Construct the file path
    let file = __dirname + "/public/" + file_path;

    // Read the file and return it on the callback
    fs.readFile(file, function (err, content) {
      if (err) {
        response.writeHead(404);
        response.end();
      } else {
        //specify the content type in the response
        response.setHeader("X-Content-Type-Options", "nosniff");

        // Extract the extension from the path of the file
        const extension = path.parse(file).ext;

        // Get the corresponding content-type
        const mime = mimeType[extension];

        response.writeHead(200, { "Content-type": mime });
        response.end(content);
      }
    });
  })
  .listen(3000);
