// dependencies
require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");

// instance for express app
const app = express();

// port of app
const PORT = process.env.PORT || 8080;

// all actual code
// set handlebars as templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// start our server to listen to client requests
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });