const fastify = require("fastify")();

fastify.get("/", (req, res) => {
  res.send();
});

fastify.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening on ${address}`);
});
