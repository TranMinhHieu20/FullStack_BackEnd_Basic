const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

// Get the client
const mysql = require("mysql2/promise");

const configViewsEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const { connect } = require("http2");
const port = process.env.PORT || 8080; // .env -> port
const hostname = process.env.HOST_NAME; // env -> hostname = localhost

//config template engine
//config static files
configViewsEngine(app);

// constructor routes
app.use("/", webRouter);

// Create the connection to database
async function connectDB() {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            port: 3307,
            user: "root",
            password: "123456",
            database: "hoidanit",
        });
        console.log("ConnectDB success");

        const [results, fields] = await connection.query(
            "SELECT * FROM `Users`"
        );

        console.log(">>> Results:", results); // results contains rows returned by server
        // console.log(">>>fields:", fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log("Loi truy van mySQL", err);
    }
}

connectDB();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
});
