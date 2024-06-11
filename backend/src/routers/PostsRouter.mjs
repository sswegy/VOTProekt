import express from "express";
import { createPost, getPosts } from "../controllers/PostsController.mjs";

const postsRouter = express.Router();

postsRouter.post("/new", async (req, res) => {
    const { title, content, username } = req.body;
    const status = await createPost(title, content, username);
    res.sendStatus(status);
});

postsRouter.get("/", async (req, res) => {
    const posts = await getPosts();
    res.send(posts);
});

export default postsRouter;
