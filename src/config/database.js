// Get the client
const mysql = require("mysql2/promise");
require("dotenv").config();

// async function connectDB() {
//     try {
//         const connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             port: process.env.DB_PORT,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//         });
//         console.log("ConnectDB success");
//         return connection;
//     } catch (err) {
//         console.log("Loi truy van mySQL", err);
//     }
// }
// async function connectDB() {
//     try {
//         const connection = await mysql.createPool({
//             host: process.env.DB_HOST,
//             port: process.env.DB_PORT,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//             waitForConnections: true,
//             connectionLimit: 10,
//             queueLimit: 0,
//         });
//         console.log("ConnectDB success");
//         return connection;
//     } catch (err) {
//         console.log("Loi truy van mySQL", err);
//     }
// }

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

console.log(connection ? "ConnectDB successhihi" : "Loi truy van mySQL");

module.exports = connection;
