import express from "express";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());


app.get("/test", (req, res) => {
    res.send("test");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`);
});