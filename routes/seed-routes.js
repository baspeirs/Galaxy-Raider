// ============= When deployed to heroku, you will need to run ALL the seed routes to give 
// the heroku database the table data ===============


// Requiring our models and passport as we've configured it
const db = require("../models");
// const passport = require("../config/passport");

module.exports = function (app) {
    app.get("/seeds/planets", (req, res) => {
        db.Planet.sync({ force: true }).then(() => {
            db.Planet.bulkCreate(
                [{
                    name: "Xandar",
                    occupied_race: "Xandarian",
                    hostile_race: null,
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Knowhere",
                    occupied_race: "Mix",
                    hostile_race: "Tarran",
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Sovereign",
                    occupied_race: "Sovereign",
                    hostile_race: null,
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Hala",
                    occupied_race: "Kree",
                    hostile_race: "Xandarian",
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Terra",
                    occupied_race: "Terran",
                    hostile_race: "Centaurian",
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Aakon",
                    occupied_race: "Aakons",
                    hostile_race: null,
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Sakaar",
                    occupied_race: "Mix",
                    hostile_race: null,
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
                {
                    name: "Centauri-IV",
                    occupied_race: "Centaurian",
                    hostile_race: null,
                    engineering_resources: 0,
                    cooking_resources: 0,
                    financier_resources: 0
                },
            ]
            )
            .then((result) => {
                res.json(result);
              })
        });
    });

    app.get("/seeds/races", (req, res) => {
        db.Race.sync({ force: true }).then(() => {
            db.Race.bulkCreate(
                [{
                    name: "Terran",
                    planetId: 5
                },
                {
                    name: "Centaurian",
                    planetId: 8
                },
                {
                    name: "Xandarian",
                    planetId: 1
                }
            ]
            )
            .then((result) => {
                res.json(result);
              })
        });
    });
    app.get("/seeds/ages", (req, res) => {
        db.Age.sync({ force: true }).then(() => {
            db.Age.bulkCreate(
                [{
                    name: "Young"
                },
                {
                    name: "Middle"
                },
                {
                    name: "Old"
                }
            ]
            )
            .then((result) => {
                res.json(result);
              })
        });
    });
    app.get("/seeds/professions", (req, res) => {
        db.Profession.sync({ force: true }).then(() => {
            db.Profession.bulkCreate(
                [{
                    name: "Engineer"
                },
                {
                    name: "Cook"
                },
                {
                    name: "Financier"
                }
            ]
            )
            .then((result) => {
                res.json(result);
              })
        });
    });
};
