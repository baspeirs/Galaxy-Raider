// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // this is for localhost:8080/
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/splash.html"));
  });

  app.get("/name", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/name.html"));
  });

  // route to instructions.html
  app.get("/instructions", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/instructions.html"))
  });

  
};
