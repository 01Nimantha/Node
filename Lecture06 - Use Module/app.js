const http = require("http");
// const hadleRequest = require("./user");
const { hadleRequest } = require("./user");
const server = http.createServer(hadleRequest);

const port = 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on address http://localhost:${port}`);
});
