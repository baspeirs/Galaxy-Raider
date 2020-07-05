// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Data
  const testData = [
    {
      characterOptions: {
        ships: [
          "YSHIP",
          "BRACKETSHIP",
          "ICESHIP",
          "BUTTERFLYSHIP",
          "ROLLERSHIP"
        ],
        races: ["Centurians", "Terrans (Humans)", "Xandarians"],
        ages: ["Young", "Middle", "Old"],
        professions: ["Engineer", "Cooking", "Financier"]
      }
    },
    {
      planet: [
        "Xandar",
        "Knowhere",
        "Hala",
        "Terra",
        "Sovereign",
        "Aakon",
        "Sakaar",
        "Centauri-IV"
      ]
    }
  ];
  // this is for localhost:8080/
  app.get("/", (req, res) => {
    res.render("splash", {
      ships: testData[0].characterOptions.ships,
      races: testData[0].characterOptions.races,
      ages: testData[0].characterOptions.ages,
      professions: testData[0].characterOptions.professions
    });
  });

  app.get("/startingplanet", (req, res) => {
    res.render("startingPlanet", testData[1]);
  });

  // route to instructions.html
  app.get("/instructions", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/instructions.html"));
  });
};
