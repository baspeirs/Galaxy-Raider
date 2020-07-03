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
        db.Planet.sync({ force: true }).then(() => {
            db.Planet.bulkCreate(
                [{

                }
            ]
            )
            .then((result) => {
                res.json(result);
              })
        });
    });
};
