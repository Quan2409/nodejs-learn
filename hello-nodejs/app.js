//using "http" module in Node.js
const http = require("http");
const { getName, getEmail } = require("./utils/function");

const server = http.createServer((req, res) => {
  res.end(`
    <h3>Name: ${getName()}</h3>
	<h3>Email: ${getEmail()}</h3>
  `);
});

//Run Server
const hostname = "localhost";
const port = 4000;
server.listen(port, hostname, () => {
  console.log("Success with port: " + port);
});
