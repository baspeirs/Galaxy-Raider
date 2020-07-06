// ============= When deployed to heroku, you will need to run ALL the seed routes to give 
// the heroku database the table data ===============


// Requiring our models and passport as we've configured it
const db = require("../models");
// const passport = require("../config/passport");

module.exports = function (app) {
    app.get("/seeds/planets", (req, res) => {
        db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
            .then(() => db.Planet.sync({ force: true }))
            .then(() => db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
            .then(() => {
                return db.Planet.bulkCreate(require("../db/seeds/planets"));
            })
            .then(() => db.Planet.findAll({}))
            .then((data) => res.json(data))
    });

    app.get("/seeds/races", (req, res) => {
        db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
            .then(() => db.Race.sync({ force: true }))
            .then(() => db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
            .then(() => {
                return db.Race.bulkCreate(require("../db/seeds/races"));
            })
            .then(() => db.Race.findAll({ include: [{model: db.Planet, as: "Planet"}, {model: db.Planet, as: "Hostile"}] }))
            .then((data) => res.json(data))
    });

    app.get("/seeds/ages", (req, res) => {
        db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
            .then(() => db.Age.sync({ force: true }))
            .then(() => db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
            .then(() => {
                return db.Age.bulkCreate(require("../db/seeds/ages"))
            })
            .then(() => db.Age.findAll({}))
            .then((data) => res.json(data))
    });

    app.get("/seeds/professions", (req, res) => {
        db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
            .then(() => db.Profession.sync({ force: true }))
            .then(() => db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
            .then(() => {
                return db.Profession.bulkCreate(require("../db/seeds/professions"))
            })
            .then(() => db.Profession.findAll({}))
            .then((data) => res.json(data))
    });
};
