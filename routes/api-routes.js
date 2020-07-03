// Requiring our models and passport as we've configured it
const db = require ("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // ================================= sign in code ===========================
  // app.post("/api/login", passport.authenticate("local"), (req, res) => {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
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

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/planets", (req, res) => {
    console.log(res.body)
      // res.json({
      //   id: res.planets.id
      // });
  });
};
