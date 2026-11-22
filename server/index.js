const http = require("http");
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  const { method, url } = req;
  if (method === "GET" && url === "/home") {
    res.statusCode = 200;
    res.end("HOME");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.end("ABOUT");
  } else {
    res.statusCode = 404;
    res.end("NOT FOUND");
  }
});

server.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버 실행`);
});