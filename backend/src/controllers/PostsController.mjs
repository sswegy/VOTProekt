import { DBPool } from "./DBConnector.mjs";

export async function createPost(title, content, username) {
    DBPool.query("INSERT INTO Posts (title, content, username) VALUES (?, ?, ?)", [username, title, content]);
    return 201;
}

export async function getPosts() {
    const result = DBPool.query("SELECT * FROM Posts");
    return result[0];
}