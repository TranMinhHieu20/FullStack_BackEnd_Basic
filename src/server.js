const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080; // .env -> port
const hostname = process.env.HOST_NAME; // env -> hostname = localhost

//config template engine
// app.set("views", "./views");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//config static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/abc", (req, res) => {
    // res.send("Tran Minh Hieu");
    res.render("sample.ejs");
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
});
