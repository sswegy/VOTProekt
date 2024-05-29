import express from "express";
import { getUsers, createUser } from "../controllers/UsersController.mjs";

const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

usersRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const register_status = await createUser(username, password);
  res.sendStatus(register_status);
});

export default usersRouter;
