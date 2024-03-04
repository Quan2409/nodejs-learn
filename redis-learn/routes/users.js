var express = require("express");
var router = express.Router();
const { createClient } = require("redis");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/test-redis", async (req, res) => {
  const client = await createClient({
    password: "XiZVY9OKyaZA7wQ1xDCn8QNzKlJ4nXV6",
    socket: {
      host: "redis-15386.c323.us-east-1-2.ec2.cloud.redislabs.com",
      port: 15386,
    },
  })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  // await client.set("f8-url", "https://fullstack.edu.vn");

  const user = { name: "Khac Quan", email: "quan123@gmail.com" };
  await client.set("quan-user", JSON.stringify(user));
  let result = await client.get("quan-user");
  // await client.disconnect();
  res.json({ result });
});

module.exports = router;
