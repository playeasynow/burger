// dependencies
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

// instance for express app
const app = express();

// port of app
const PORT = process.env.PORT || 8080;

// express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// handlebars as templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start our server to listen to client requests
app.listen(PORT, function() {
    // log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });