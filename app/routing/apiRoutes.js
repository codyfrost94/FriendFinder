// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

const routes = {
    "survey": app.get("/survey", function(req, res) 
    {
        res.sendFile(path.join(__dirname, "survey.html"))
    }),
    "home":  app.get("/", function(req, res) 
    {
        res.sendFile(path.join(__dirname, "home.html"))
    })
    // "getFriends": app.get("/api/friends", function(req, res) 
    // {
    //     res.sendFile(path.join(__dirname, "survey.html"))
    // })
};