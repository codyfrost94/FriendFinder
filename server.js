// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================
// htmlRoutes.home;
console.log(htmlRoutes.home);
app.get("/survey", function(req, res) 
    {
        res.sendFile(path.join(__dirname, "app/public/survey.html"))
    });
app.get("/", function(req, res) 
    {
        res.sendFile(path.join(__dirname, "app/public/home.html"))
    });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});