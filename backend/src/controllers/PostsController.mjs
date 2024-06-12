import { DBPool } from "./DBConnector.mjs";

export async function createPost(title, content, username) {
    await DBPool.query("INSERT INTO Posts (title, content, username) VALUES (?, ?, ?)", [title, content, username]);
    return 201;
}

export async function getPosts() {
    const result = await DBPool.query("SELECT * FROM Posts");
    console.log(result[0]);
    return result[0];
}