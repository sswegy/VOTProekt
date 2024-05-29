import mysql from "mysql2";

export const DBPool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'Vot'
}).promise();
