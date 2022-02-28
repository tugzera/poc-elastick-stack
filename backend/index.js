const apm = require("elastic-apm-node").start({
  serverUrl: "http://localhost:8200/",
  serviceName: "log",
  environment: "production",
  logLevel: "debug",
  captureBody: "all",
});
const fastify = require("fastify")({ logger: true });

const timeOut = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

apm.middleware.connect();

fastify.addHook("onResponse", (req, rep, done) => {
  if (rep.statusCode === 500) {
    apm.captureError(req.body);
  }
  done();
});

fastify.post("/password", async (request, reply) => {
  await timeOut();
  throw new Error("oi");
  reply.send({ test: "Ola mundo" });
});

fastify.post("/create", async (request, reply) => {
  await timeOut();
  reply.send({ test: "Ola mundo" });
});

fastify.get("/test", async (request, reply) => {
  await timeOut();
  reply.send({ test: "Ola mundo" });
});

fastify.get("/", async (request, reply) => {
  reply.send({ test: "Ola mundo" });
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    console.log("AKIIII", err);
    // fastify.log.error(err);
    // process.exit(1);
  }
};
start();
