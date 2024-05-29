import mysql from "mysql2";

const DBPool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'Vot'
}).promise();

export async function createUser(username, password) {
    const result = await DBPool.query("INSERT INTO Users (username, password) VALUES (?, ?)", [username, password]);
    return result;
}

export async function getUsers() {
    const result = await DBPool.query("SELECT * FROM Users");
    return result;
}