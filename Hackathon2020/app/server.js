// var http = require("http");
// var fs = require("fs");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "text/javascript" });
//   fs.readFile("./testOne.js", null, function(error, data) {
//     if (error) {
//       response.writeHead(404);
//       response.write("File not found!");
//     } else {
//       response.write(data);
//     }
//     response.end();
//   });
// }

// http.createServer(onRequest).listen(8000);

//http.createServer(onRequest).listen(8000);

// const http = require("http");
// const fs = require("fs");

// const hostname = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   // res.end("Hello World\n");

//   fs.readFile("./featureLayer.html", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// });

// server.listen(port, hostname, () => {
//   console.log("Server running at http://${hostname}:${port}/");
// });

var http = require("http");
var fs = require("fs");
http
  .createServer(function(req, res) {
    fs.readFile("featureLayer.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
