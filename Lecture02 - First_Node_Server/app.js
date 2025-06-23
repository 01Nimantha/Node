const http = require("http");
const server =http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  //process.exit(); Stops event loop
});
const port= 3000;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`);
});