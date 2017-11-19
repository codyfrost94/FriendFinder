// Dependencies
// =============================================================
var friendsData = require("../data/friends.js")

// Routes
// =============================================================

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
}