const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My API in NODE</title></head>");
    res.write("<body><h1>Enter your Details.</h1>");
    res.write(
      '<form action="/details" method="POST"><input type="text" placeholder="Enter your Name" name="name"/> <br/>'
    );
    res.write("<h2>Select Gender</h2>");
    res.write('Male<input type="radio" name="gender" value="male"/> <br/>');
    res.write(
      'Female<input type="radio" name="gender" value="female"/> <br/><br/><br/>'
    );
    res.write('<button type="submit">Submit</button>');
    res.write("</form></body></html>");
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/details" &&
    req.method == "POST"
  ) {
    const data = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });

    req.on("end", () => {
      const fullData = Buffer.concat(data).toString();
      console.log(fullData);
      const params = new URLSearchParams(fullData);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("details.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My API in NODE</title></head>");
  res.write("<body><h1>Welcome to the Page.</h1></body>");
  res.write("</html>");
  res.end();
});

const port = 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on address http://localhost:${port}`);
});
