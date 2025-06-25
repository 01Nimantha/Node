//Core Modules
// const http = require("http");
//External Modules
const express = require("express");
//Local Modules
const { hadleRequest } = require("./user");

const app = express();

app.use((req, res, next) => {
  console.log("Come in to First middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Come in to second middleware", req.url, req.method);
  res.send("<p>Hello world!</p>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Your server running on http://localhost:${port}`);
});
