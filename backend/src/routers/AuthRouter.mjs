import express from "express";
import Keycloak from "keycloak-connect";
import jwt from "jsonwebtoken";
import { keycloakConfig } from "../KeycloakConfig.js";

const authRouter = express.Router();

const keycloak = new Keycloak({}, keycloakConfig);

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  keycloak.grantManager
    .obtainDirectly(username, password)
    .then((grant) => {
      const decodedToken = jwt.decode(grant.access_token.token);
      const userId = decodedToken.sub;
      const name = decodedToken.name;
      const username = decodedToken.preferred_username;
      res.json({ id: userId, username: username, name: name });
    })
    .catch((err) => {
      console.error("Failed to login", err);
      res.status(401).json({ message: "Invalid username or password" });
    });
});

authRouter.post("/register", (req, res) => {
  res.status(501).json({ message: "Registration not implemented yet" });
});

export default authRouter;
