const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const connectDB = require("./config/database");

// Get the client

const configViewsEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const port = process.env.PORT || 8080; // .env -> port
const hostname = process.env.HOST_NAME; // env -> hostname = localhost

//config template engine
//config static files
configViewsEngine(app);

// constructor routes
app.use("/", webRouter);

// Create the connection to database
async function startConnectDB() {
    const connection = await connectDB();
    if (connection) {
        const [results, fields] = await connection.query(
            "SELECT * FROM `Users`"
        );

        console.log(">>> result:", results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
    }
}

startConnectDB();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
});
