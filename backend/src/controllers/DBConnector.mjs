import mysql from "mysql2";

export const DBPool = mysql.createPool({
    host: 'proxysql',
    port: '6033',
    user: 'root',
    password: 'pass',
    database: 'Vot'
}).promise();
