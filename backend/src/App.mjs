import express from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
import cors from "cors";
import jwt from "jsonwebtoken";
import authRouter from "./routers/AuthRouter.mjs";
import postsRouter from "./routers/PostsRouter.mjs";
import { keycloakConfig } from "./KeycloakConfig.js";

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

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

app.use(keycloak.middleware());

app.use("/auth", authRouter);
app.use("/posts", postsRouter);

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
