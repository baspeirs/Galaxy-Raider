// Pseudocode of getting planets that can be seen by user.
// User starting at Earth.

// // $.(ajaxcall) (route: lastPlanet).get {
//     planet: data
// }

$(document).ready(() => {
  // console.log("Ready!");
  const planetsArray = [
    "Aakon",
    "Centauri-IV",
    "Terra",
    "Hala",
    "Knowhere",
    "Sovereign"
  ];
  const visiblePlanets = [];
  const planetVal1 = $("#option1").text();
  const planetVal2 = $("#option2").text();
  const planetVal3 = $("#option3").text();

  let optionNum = 0;
  visiblePlanets.push(planetVal1, planetVal2, planetVal3);
  visiblePlanets.forEach((element) => {
    let planetName = element.toUpperCase();
    console.log(planetName);
    optionNum = optionNum + 1
    console.log(optionNum);
    // use switch case
    switch(planetName) {
      case "TERRA": 
      $("#option" + optionNum).css("background-image", "url('../images/selectPlanet/option2.png')");
      break;
      case "AAKON": 
      $("#option" + optionNum).css("background-image", "url('../images/selectPlanet/option6.png')");
      break;
      case "CENTAURI-IV": 
      $("#option" + optionNum).css("background-image", "url('../images/selectPlanet/option5.png')");
      break;
      case "HALA": 
      $("#option" + optionNum).css("background-image", "url('../images/selectPlanet/option8.png')");
      break;
      case "KNOWHERE": 
      $("#option" + optionNum).css("background-image", "url('../images/selectPlanet/option9.png')");
      break;
      case "SOVEREIGN": 
      $("#option" + optionNum).css("background-image", "url('../images/selectPlanet/option4.png')");
      break;
    }
  });

// const printResults = result => {
//   console.log(result);
// };

$(".travel-planets").on("click", ".planetItem", function() {
  const traveltext = $(this).text();
  const travelTo = {
    planet: traveltext
  };
  // console.log(travelTo);
  const url = window.location.pathname;
  const charID = url.substring(url.lastIndexOf("/") + 1);
  // console.log(charID);
  $.ajax("/api/planets/" + traveltext + "/" + charID, {
    // data: travelTo,
    method: "GET"
  }).then(result => {
    console.log(result);
    window.location.replace(
      "/landingplanet/" + result.planet + "/" + result.character
    );
    // printResults(result);  // use for animaation later
  });
});
});