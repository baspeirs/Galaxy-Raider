// Requiring our models and passport as we've configured it
const db = require ("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/characters", (req, res) => {
    db.Character.create({
      name: req.body.name,
      race: req.body.race,
      profession: req.body.profession,
      age: req.body.age,
      score: req.body.score
    })
      .then((result) => {
        console.log(result)
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
      attributes: ["name", "planetId"]
    }).then(result => {
      return res.json(result)
    })
  });

  // Route for getting planet data
  app.get("/api/planets", (req, res) => {
    db.Planet.findAll({
      attributes: ["name", "occupied_race", "hostile_race", "engineering_resources", "cooking_resources", "financier_resources",]
    }).then(result => {
      return res.json(result);
    })
  });

  app.get("/api/characters", (req, res) => {
    db.Character.findAll({
      attributes: ["name", "race", "age", "profession", "score", "planetId", "raceId", "ageId", "professionId"]
    }).then(result => {
      return res.json(result);
    })
  });

  app.get("/api/ages", (req, res) => {
    db.Age.findAll({
      attributes: ["name"]
    }).then(result => {
      return res.json(result)
    })
  });

  app.get("/api/professions", (req, res) => {
    db.Profession.findAll({
      attributes: ["name"]
    }).then(result => {
      return res.json(result)
    })
  });
};
