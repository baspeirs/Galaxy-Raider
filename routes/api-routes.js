// Requiring our models and passport as we've configured it
const db = require("../models");
// === passport for future use ===
// const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/characters", (req, res) => {
    db.Character.create({
      char_name: req.body.char_name,
      score: req.body.score,
      RaceId: req.body.RaceId,
      AgeId: req.body.AgeId,
      ProfessionId: req.body.ProfessionId
    })
      .then(result => {
        console.log(result);
        res.json(result);
        // res.json({ id: result.insertId });
        // key on result we are looking for might be defaultValues
        // try console logging on the front end and the back end if you aren't finding what you are looking for
      })
      .catch(err => {
        res.status(401).json(err);
      });
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

  // ===== route for character data =====
  app.get("/api/characters", (req, res) => {
    db.Character.findAll({
      include: [{ all: true, nested: true }]
    }).then(result => {
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
};
