// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
// ==== for futre authentication use ====
// const isAuthenticated = require("../config/middleware/isAuthenticated");

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
        ]
      }
    }
  ];
  // this is for localhost:8080/
  app.get("/", (req, res) => {
    db.Race.findAll({
      include: [{ all: true }]
    }).then(raceRes => {
      db.Age.findAll({
        include: [{ all: true }]
      }).then(ageRes => {
        db.Profession.findAll({
          include: [{ all: true }]
        }).then(profRes => {
          res.render("splash", {
            ships: testData[0].characterOptions.ships,
            races: raceRes,
            ages: ageRes,
            professions: profRes
          });
        });
      });
    });
  });

  // this is for localhost:8080/startingplanet
  app.get("/selectplanet/:id", (req, res) => {
    db.Planet.findAll({ include: [{ all: true }] }).then(planetRes => {
      db.Character.findOne({
        where: {
          id: req.params.id
        },
        include: [{ all: true, nested: true }]
      }).then(result => {
        res.render("selectPlanet", { travel: planetRes, results: result });
      });
    });
  });

  // === route for the landingPlanet handlebars
  app.get("/landingplanet/:planet/:character", (req, res) => {
    console.log(req.params);
    db.Planet.findOne({
      where: {
        id: req.params.planet
      },
      include: [{ all: true }]
    }).then(planetRes => {
      db.Character.findOne({
        where: {
          id: req.params.character
        },
        include: [{ all: true, nested: true }]
      }).then(charRes => {
        // set variables for planet status (home/hostile/nutral)
        const currentPlanet = planetRes.planet_name;
        const homePlanet = charRes.Race.Planet.planet_name;
        const hostilePlanet = charRes.Race.Hostile.planet_name;
        if (currentPlanet === homePlanet) {
          res.render("landingPlanet", {
            planet: planetRes,
            character: charRes,
            home: true,
            hostile: false,
            neutral: false
          });
        } else if (currentPlanet === hostilePlanet) {
          // character lost and points are set to zero
          db.Character.update(
            {
              score: 0
            },
            {
              where: {
                id: req.params.character
              }
            }
          );
          res.render("landingPlanet", {
            planet: planetRes,
            character: charRes,
            home: false,
            hostile: true,
            neutral: false
          });
        } else {
          res.render("landingPlanet", {
            planet: planetRes,
            character: charRes,
            home: false,
            hostile: false,
            neutral: true
          });
        }
        // update character's current planet
        db.Character.update(
          {
            PlanetId: req.params.planet
          },
          {
            where: {
              id: req.params.character
            }
          }
        );
      });
    });
  });

  // Recieving made character data from splash page.
  app.post("/", (req, res) => {
    testData.push(req.body);
    console.log(testData, "to send to starting planet");
    console.log(testData[1].profession, "to send to starting planet");
  });

  app.get("/startingplanet/:id", (req, res) => {
    db.Character.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then(result => {
      console.log("html route: ");
      console.log(result);
      res.render("startingPlanet", { results: result });
    });
  });

  // route to instructions.html
  app.get("/instructions", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/instructions.html"));
  });
};
