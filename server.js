// Dependencies
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Data parsing Express app 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//confirmation server is listening
app.listen(PORT, () => console.log("listening on port %s", PORT));
//app.listen(PORT, function() {
  //console.log("Listening on PORT: " + PORT);
//});



