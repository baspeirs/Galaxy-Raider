// Requiring our models and passport as we've configured it
const db = require("../models");
// === passport for future use ===
// const passport = require("../config/passport");
let currentShip = "";

module.exports = function(app) {
  // create new character
  app.post("/api/characters", (req, res) => {
    console.log(req.body, "To find ships somewhere on this body");
    currentShip = req.body.ship;
    db.Character.create({
      char_name: req.body.name,
      score: req.body.score,
      RaceId: req.body.race,
      AgeId: req.body.age,
      PlanetId: req.body.planet,
      ProfessionId: req.body.profession
    })
      .then(result => {
        res.json({ id: result.id });
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // get planet by name
  app.get("/api/planets/:name", (req, res) => {
    db.Planet.findOne({
      where: {
        planet_name: req.params.name
      }
    }).then(result => {
      res.json({ result });
    });
  });

  // update recource points values
  app.put("/api/planets/:id", (req, res) => {
    db.Planet.update(
      {
        engineering_resources: req.body.engineering_resources,
        cooking_resources: req.body.cooking_resources,
        financier_resources: req.body.financier_resources
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(result => console.log(result));
  });

  // Route for getting all races and their corresponding planetId
  app.get("/api/races", (req, res) => {
    db.Race.findAll({
      include: [{ all: true, nested: true }]
    }).then(result => {
      return res.json(result);
    });
  });

  // ==== Route for getting planet data ====
  app.get("/api/planets", (req, res) => {
    db.Planet.findAll({
      include: [{ all: true, nested: true }]
    }).then(result => {
      return res.json(result);
    });
  });

  app.get("/api/planets/:name/:id", (req, res) => {
    console.log(req.params);
    db.Planet.findOne({
      where: {
        planet_name: req.params.name
      }
    }).then(planetRes => {
      db.Character.findOne({
        where: {
          id: req.params.id
        }
      }).then(charRes => {
        res.json({ planet: planetRes.id, character: charRes.id });
      });
    });
  });

  // ===== route for all character data =====
  app.get("/api/characters", (req, res) => {
    db.Character.findAll({
      include: [{ all: true, nested: true }]
    }).then(result => {
      return res.json(result);
    });
  });

  // ===== find character by id =====
  app.get("/api/characters/:id", (req, res) => {
    db.Character.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true, nested: true }]
    }).then(result => {
      return res.json(result);
    });
  });

  app.put("/api/characters/:id", (req, res) => {
    db.Character.update(
      {
        score: req.body.points
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(result => {
      return res.json(result);
    });
  });

  // ===== route for age data =====
  app.get("/api/ages", (req, res) => {
    db.Age.findAll({
      include: [{ all: true, nested: true }]
    }).then(result => {
      return res.json(result);
    });
  });

  // ===== route for profession data =====
  app.get("/api/professions", (req, res) => {
    db.Profession.findAll({
      include: [{ all: true, nested: true }]
    }).then(result => {
      return res.json(result);
    });
  });

  app.get("/api/ships", (req, res) => {
    console.log(currentShip);
    return res.json({ ship: currentShip });
  });

  app.post("/api/newPage", (req, res) => {
    console.log(req.body);
    res.json(req);
  });

  app.get("/api/newPage", (req, res) => {
    console.log(req.body);
    res.end();
  });
};
