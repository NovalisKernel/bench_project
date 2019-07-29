const jsonServer = require("json-server");
const fs = require("fs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const userdb = JSON.parse(fs.readFileSync("users.json", "UTF-8"));
const SECRET_KEY = "123456789";

function createAccessToken(payload) {
  const expiresIn = "30sec";
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function createRefreshToken(payload) {
  const expiresIn = "30h";
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decoded) =>
    decoded !== undefined ? true : false
  );
}

function isAuthenticated({ username, password }) {
  return userdb.users.findIndex(
    user => user.username === username && (user.password === password) !== -1
  );
}

server.use(middlewares);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.post("/refresh", (req, res) => {
  console.log(req.body);
  const { refreshToken } = req.body;
  console.log(verifyToken(refreshToken));
  if (verifyToken(refreshToken) === false) {
    const status = 401;
    const message = "Incorrect refresh token";
    res.status(status).json({ status, message });
    return;
  }
  const { username, password } = jwt.verify(refreshToken, SECRET_KEY);
  const access_token = createAccessToken({ username, password });
  const refresh_token = createRefreshToken({});
  res.status(200).json({access_token, refresh_token});
});
server.post("/test", (req, res) => {
  const access_token = req.headers.authorization.split(" ")[1];
  if (verifyToken(access_token) === false) {
    const status = 401;
    const message = "Invalid access token";
    res.status(status).json({status, message})
    return
  }
  res.status(200).json("OK");
})
server.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createAccessToken({ username, password });
  const refresh_token = createRefreshToken({});
  res.status(200).json({ access_token, refresh_token });
});
server.use(router);
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
