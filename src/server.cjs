// const cors =require('cors');
// const jsonServer = require('json-server')
// const auth = require('json-server-auth')

// const app = jsonServer.create()
// const router = jsonServer.router('./db.json')

// app.use(cors);
// // /!\ Bind the router db to the app
// app.db = router.db

// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.listen(4000)

const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.post("/posts", (req, res) => {
  const db = router.db;
  const { title, value, imageUrl, userId } = req.body;
  const id = Date.now().toString();
  const post = { id, title, value, imageUrl, userId };
  db.get("posts").push(post).write();
  res.json(post);
});

server.use(middlewares);
server.db = router.db;

server.use(auth);

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
