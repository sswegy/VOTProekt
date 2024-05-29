import express from "express";
import cors from "cors";
import { createUser, getUsers } from "./controllers/UsersController.mjs";
import usersRouter from "./routers/UsersRouter.mjs";
import postsRouter from "./routers/PostsRouter.mjs";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
