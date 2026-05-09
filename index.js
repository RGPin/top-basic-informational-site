// const http = require("node:http");
// const fs = require("node:fs");

// console.log("test");

// const routes = {
//   "/": "index.html",
//   "/about": "about.html",
//   "/contact-me": "contact-me.html",
// };

// const server = http.createServer((req, res) => {
//   const file = routes[req.url] || "404.html";

//   fs.readFile(file, (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Server Error");
//       return;
//     }

//     if (file === "404.html") {
//       res.writeHead(404, { "Content-Type": "text/html" });
//     } else {
//       res.writeHead(res.statusCode || 200, { "Content-Type": "text/html" });
//     }

//     res.end(data);
//   });
// });

// server.listen(8080);

const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "404.html"));
// });

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening to port ${PORT}`);
});
