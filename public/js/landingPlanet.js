// // if (this_landed_planet === char_home_planet) {
// server side
// load function that gets users resources and deposits it into the players Score.
// client side
// load function that unhides a homeScreen div with place showing score,
// button to end game
// } else if (this_landed_planet === char_hostile_planet) {
// server side
// load function that sends score to db (user gets a score of 0).
// client side
// send user to highscore page
// } else {
// server side
// load function that gets the planets viewable planets.
// load function that gets the random value of resource found.
// load function that sends score to db.
// load function that updates player current_planet
// client side
// load function that displays the correct planets (may be able to do it with handlebars conditionals)
// load function that displays resource on page
// load function that creates button for them to go to SelectPlanet page
//
// }

const $landedPlanet = $("#planetName").text();
console.log($landedPlanet);

// const $planetValues = $("#planetValues").text();
// console.log($planetValues, " :planet values.");
const $hostileplanet = $("#hostileplanet").text();
console.log($hostileplanet, " :hostile planet.");
const $homeplanet = $("#homeplanet").text();
console.log($homeplanet, " :home planet.");

console.log($characterValues.Race.Hostile.id, " :character values");
