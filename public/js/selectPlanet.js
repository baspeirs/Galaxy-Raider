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
  // console.log(planetsArray);
  const visiblePlanets = [];
  const planetVal = $("#planetName").text();

  // console.log(planetVal);
  switch (planetVal) {
  case "Centauri-IV":
    visiblePlanets.push(planetsArray[2], planetsArray[3]);
    // console.log(visiblePlanets, ":visible planets");
    $("#option1").attr("src", "../images/selectPlanet/option1.png");
    break;
  case "Terra":
    visiblePlanets.push(planetsArray[1], planetsArray[3]);
    // console.log(visiblePlanets, ":visible planets");
    break;
  }
});

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
  });
});
