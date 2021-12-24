const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('hello world');

  res.end();
});

const port = 3000;
server.listen(port);

console.log(`Listening in port ${port} ...`);
