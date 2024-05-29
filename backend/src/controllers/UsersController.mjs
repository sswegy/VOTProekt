import { DBPool } from "./DBConnector.mjs";

export async function createUser(username, password) {
  try {
    const [existingUser] = await DBPool.query(
      "SELECT id FROM Users WHERE username = ?",
      [username]
    );
    if (existingUser.length > 0) return 409;
    const [result] = await DBPool.query(
      "INSERT INTO Users (username, password) VALUES (?, ?)",
      [username, password]
    );
    return 201;
  } catch (error) {
    return 500;
  }
}

export async function getUsers() {
  const result = await DBPool.query("SELECT * FROM Users");
  return result[0];
}
