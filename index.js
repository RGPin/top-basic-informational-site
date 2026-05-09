const http = require("node:http");
const fs = require("node:fs");

console.log("test");

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const server = http.createServer((req, res) => {
  const file = routes[req.url] || "404.html";

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
      return;
    }

    if (file === "404.html") {
      res.writeHead(404, { "Content-Type": "text/html" });
    } else {
      res.writeHead(res.statusCode || 200, { "Content-Type": "text/html" });
    }

    res.end(data);
  });
});

server.listen(8080);
