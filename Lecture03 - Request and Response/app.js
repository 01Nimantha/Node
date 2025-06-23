const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My API in NODE</title></head>');
  res.write('<body><h1>Welcome to the Page.</h1></body>');
  res.write('</html>');
  res.end();
});

const port = 3000;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on address http://localhost:${port}`);
});
