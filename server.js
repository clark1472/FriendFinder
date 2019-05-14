// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Data parsing Express app 
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// parse some custom thing into a Buffer. found in git expressjs/body-parser
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// The API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//confirmation server is listening
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});



