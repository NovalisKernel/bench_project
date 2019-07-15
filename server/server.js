const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();
//TODO: Fake server
server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
