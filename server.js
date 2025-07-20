// both are same
// const http = require("http");
const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("there is not secret data");
  }
  res.end("hello world");
});

server.listen(3000);
