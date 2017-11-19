// Dependencies
// =============================================================

const path = require("path");


// Sets up the Express App
// =============================================================

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

module.exports = function(app) {
    app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../../app/public/survey.html"))
        });
        app.get("*", function(req, res) {
            res.sendFile(path.join(__dirname, "../../app/public/home.html"))
        });
};