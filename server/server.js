const jsonServer = require("json-server");
const fs = require("fs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();
const userdb = JSON.parse(fs.readFileSync("server/users.json", "UTF-8"));
const SECRET_KEY = "123456789";
const expiresIn = "1h";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

function isAuthenticated({ username, password }) {
  return userdb.users.findIndex(
    user => user.username === username && (user.password === password) !== -1
  );
}

server.use(middlewares);
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ username, password });
  res.status(200).json({ access_token });
});
server.use(router);
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
