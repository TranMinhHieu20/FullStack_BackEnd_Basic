const express = require("express");
const path = require("path");

const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", path.join("./src", "/views"));

    //config static files
    app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
