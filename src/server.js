const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const connection = require("./config/database");

// Get the client

const configViewsEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const port = process.env.PORT || 8080; // .env -> port
const hostname = process.env.HOST_NAME; // env -> hostname = localhost

//config req.body
app.use(express.json()); // for json
app.use(
    express.urlencoded({
        extended: true,
    })
); // for form data

//config template engine
//config static files
configViewsEngine(app);

// constructor routes
app.use("/", webRouter);

// Create the connection to database

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
});
