const $planet = $("#planet");
const Handlebars = "";
const backgroundUrls = [
  "../images/startingPlanet/STARTING_PLANET_Aakon.png",
  "../images/startingPlanet/STARTING_PLANET_Centauri-IV.png",
  "../images/startingPlanet/STARTING_PLANET_Earth.png",
  "../images/startingPlanet/STARTING_PLANET_Hala.png",
  "../images/startingPlanet/STARTING_PLANET_Knowhere.png",
  "../images/startingPlanet/STARTING_PLANET_Sovereign.png",
  "../images/startingPlanet/STARTING_PLANET_Xandar.png"
];
const shipUrls = [
  "../images/ships/YSHIP.png",
  "../images/ships/BRACKETSHIP.png",
  "../images/ships/ICESHIP.png",
  "../images/ships/BUTTERFLYSHIP.png",
  "../images/ships/ROLLERSHIP.png"
];
const planetVal = $($planet).text();
console.log(planetVal);

// Choosing which planet background to display based on planet.
switch (planetVal) {
  case "Aakon":
    $(".container").css("background-image", "url(" + backgroundUrls[0] + ")");
    break;
  case "Centauri-IV":
    $(".container").css("background-image", "url(" + backgroundUrls[1] + ")");
    break;
  case "Terra":
    $(".container").css("background-image", "url(" + backgroundUrls[2] + ")");
    break;
  case "Hala":
    $(".container").css("background-image", "url(" + backgroundUrls[3] + ")");
    break;
  case "Knowhere":
    $(".container").css("background-image", "url(" + backgroundUrls[4] + ")");
    break;
  case "Sovereign":
    $(".container").css("background-image", "url(" + backgroundUrls[5] + ")");
    break;
  case "Xandar":
    $(".container").css("background-image", "url(" + backgroundUrls[6] + ")");
    break;
}

// Getting ship info via API call.
const getShip = () => {
  return $.ajax({
    url: "/api/ships",
    method: "GET"
  });
};

// Displaying the users ship to them.
const loadShip = data => {
  console.log(data.ship, "<---- data value.");
  const playerShip = data.ship;
  // Choosing which ship to display.
  switch (playerShip) {
    case "YSHIP":
    $("#ships").css("background-image", "url(" + shipUrls[0] + ")");
    break;
    case "BRACKETSHIP":
    $("#ships").css("background-image", "url(" + shipUrls[1] + ")");
    break;
    case "ICESHIP":
    $("#ships").css("background-image", "url(" + shipUrls[2] + ")");
    break;
    case "BUTTERFLYSHIP":
    $("#ships").css("background-image", "url(" + shipUrls[3] + ")");
    break;
    case "ROLLERSHIP":
    $("#ships").css("background-image", "url(" + shipUrls[4] + ")");
    break;
  }
};
// Rendering results of api call to loadShip function.
const renderShip = () => {
  return getShip().then(loadShip);
};

renderShip();

// Loading selectPlanet page with our data.
$("#next").on("click", () => {
  // Getting ship info via API call.
  // First getting character id value from url.
  const url = window.location.pathname;
  const charID = url.substring(url.lastIndexOf("/") + 1);
  console.log(charID);

  window.location.replace("/selectplanet/" + charID);
});
