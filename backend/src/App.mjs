import express from "express";
import cors from "cors";
import { createUser, getUsers } from "./controllers/DBController.mjs";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


app.get("/test", (req, res) => {
    res.send("test");
});

app.get("/users", async (req, res) => {
    res.send(await getUsers());
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const q = await createUser(username, password);
    res.status(200).send(q);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`);
});