import express from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
import cors from "cors";
import { createUser, getUsers } from "./controllers/UsersController.mjs";
import usersRouter from "./routers/UsersRouter.mjs";
import postsRouter from "./routers/PostsRouter.mjs";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

const keycloak = new Keycloak(
  {
    store: memoryStore,
  },
  {
    clientId: "mobile-app",
    bearerOnly: true,
    serverUrl: "http://keycloak:8080",
    realm: "backend",
    credentials: {
      secret: "ylQ6JOiDbL4zZW7gVXpXOeUlqoITe5C2"
    }
  }
);
app.use(keycloak.middleware());

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  keycloak.grantManager
    .obtainDirectly(username, password)
    .then((grant) => {
      res.json({ token: grant.access_token.token });
    })
    .catch((err) => {
      console.error("Failed to login", err);
      res.status(401).json({ message: "Invalid username or password" });
    });
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
