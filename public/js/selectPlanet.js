// Pseudocode of getting planets that can be seen by user.
// User starting at Earth.

// // $.(ajaxcall) (route: lastPlanet).get {
//     planet: data
// }

$(document).ready(() => {
  console.log("Ready!");
  const planetsArray = ["Aakon", "Centauri-IV", "Terra", "Hala", "Knowhere", "Sovereign"];
  console.log(planetsArray);
  let visiblePlanets = [];
  const planetVal = $("#planetName").text();

  console.log(planetVal);
  switch (planetVal) {
  case "Centauri-IV":
    visiblePlanets.push(planetsArray[2], planetsArray[3]);
    console.log(visiblePlanets, ":visible planets");
    $("#option1").attr("src", "../images/selectPlanet/option1.png");
    break;
  case "Terra":
    visiblePlanets.push(planetsArray[1], planetsArray[3]);
    console.log(visiblePlanets, ":visible planets");
    break;
  }
});