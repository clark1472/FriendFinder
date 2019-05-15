// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

//set port heroku sets port or 8080
var PORT = process.env.PORT || 8080;

//allows us to serve static files: images, css, html
app.use(express.static(__dirname + "/public"));

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
//must check this route DOES THIS NEED TO BE INDEX OR HOME????
app.get("/", function(req, res) {
  res.render("./app/public/home");
});

//confirmation server is listening
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});



