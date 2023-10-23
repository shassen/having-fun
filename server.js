const fastify = require("fastify")();
const path = require("path");
const fs = require("fs");

const publicDir = path.join(__dirname, "public");

// fastify.register(async (instance) => {
//   instance.addHook("preHandler", (req, res) => {
//     const filePath = path.join(publicDir, req.url.replace(/^\//, ""));
//     res.send(filePath);
//   });
// });

fastify.get("/", (req, res) => {
  res.send({ message: "Hello from fastify!" });
});

fastify.listen({ port: 3001 }, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${addr}`);
});
