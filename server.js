const jsonServer = require("json-server");

const auth = require("json-server-auth");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

const cors = require("cors");

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());

server.db = router.db;

server.use(auth);
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running");
});
