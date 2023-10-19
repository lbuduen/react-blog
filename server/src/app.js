const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();

//connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => fastify.log.info("Connected to the database"))
  .catch((err) => fastify.log.error(err));

// import routes
fastify.register(require("./routes/user.routes"), { prefix: "/api/v1/users" });
fastify.register(require("./routes/post.routes"), { prefix: "/api/v1/posts" });
fastify.register(require("./routes/category.routes"), { prefix: "/api/v1/categories" });
fastify.register(require("./routes/auth.routes"), { prefix: "/api/v1/auth" });

//authentication required for all routes
// const {apiKeyAuth, basicAuth} = require("./middlewares/auth");
// fastify.addHook("preHandler", apiKeyAuth);  // secret key
// fastify.addHook("preHandler", basicAuth);   //basic authentication

//start server
async function main() {
  try {
    await fastify.listen({ port: process.env.PORT || 5000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
main();
