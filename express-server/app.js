// build http server with express framework
const express = require("express");
const indexRoute = require("./src/routes/index-route");
const app = express();

// config routes
app.use(indexRoute);

// 404 code
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

let port = 3400;
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
