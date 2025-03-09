const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

const configViewsEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const port = process.env.PORT || 8080; // .env -> port
const hostname = process.env.HOST_NAME; // env -> hostname = localhost

//config template engine
//config static files
configViewsEngine(app);

// constructor routes
app.use("/", webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
});
