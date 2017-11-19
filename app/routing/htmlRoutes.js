// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

const htmlRoutes = {
    "survey": app.get("/survey", function(req, res) 
    {
        res.sendFile(path.join(__dirname, "app/public/survey.html"))
    }),
    "home":  app.get("/", function(req, res) 
    {
        res.sendFile(path.join(__dirname, "app/public/home.html"))
    })
};

module.exports = htmlRoutes;