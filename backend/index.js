const apm = require("elastic-apm-node").start({
  serverUrl: "http://localhost:8200/",
  serviceName: "log",
  environment: "production",
  logLevel: "debug",
  captureBody: "all",
});
const fastify = require("fastify")({ logger: true });

const { createConnection, getConnection } = require("typeorm");

const timeOut = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

apm.middleware.connect();

fastify.register(require("fastify-cors"), { origin: "*" });

fastify.addHook("onResponse", (req, rep, done) => {
  if (rep.statusCode === 500) {
    apm.captureError(req.body);
  }
  done();
});

fastify.post("/password", async (request, reply) => {
  await timeOut();
  const connection = getConnection();
  await connection.createQueryRunner().query(`select 1`);
  throw new Error("oi");
  reply.send({ test: "Ola mundo" });
});

fastify.post("/create", async (request, reply) => {
  await timeOut();
  const connection = getConnection();
  await connection.createQueryRunner().query(`select 1`);
  reply.send({ test: "Ola mundo" });
});

fastify.get("/test", async (request, reply) => {
  await timeOut();
  const connection = getConnection();
  await connection.createQueryRunner().query(`select * from users`);
  reply.send({ test: "Ola mundo" });
});

fastify.get("/", async (request, reply) => {
  reply.send({ test: "Ola mundo" });
});

const start = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
    });
    await fastify.listen(3333);
  } catch (err) {
    console.log("AKIIII", err);
    // fastify.log.error(err);
    // process.exit(1);
  }
};
start();
