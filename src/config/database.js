// Get the client
require("dotenv").config();

async function connectDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log("ConnectDB success");
        return connection;
    } catch (err) {
        console.log("Loi truy van mySQL", err);
    }
}
module.exports = connectDB;
