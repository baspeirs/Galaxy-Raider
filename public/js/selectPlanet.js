// Assigning arrays.
const planetsArray = [
  "Aakon",
  "Centauri-IV",
  "Terra",
  "Hala",
  "Knowhere",
  "Sovereign",
  "Xandar"
];
const shipUrls = [
  "../images/ships/YSHIP.png",
  "../images/ships/BRACKETSHIP.png",
  "../images/ships/ICESHIP.png",
  "../images/ships/BUTTERFLYSHIP.png",
  "../images/ships/ROLLERSHIP.png"
];
const visiblePlanets = [];
// Getting planet names displayed from handlebars.
const planetVal1 = $("#option1").text();
const planetVal2 = $("#option2").text();
const planetVal3 = $("#option3").text();

// Setting up variables and arrays to load proper planet images.
let optionNum = 0;
visiblePlanets.push(planetVal1, planetVal2, planetVal3);
visiblePlanets.forEach(element => {
  const planetName = element.toUpperCase();
  console.log(planetName);
  optionNum = optionNum + 1;
  console.log(optionNum);
  // use switch case
  switch (planetName) {
    case "TERRA":
      $("#option" + optionNum).css(
        "background-image",
      "url('../images/selectPlanet/option2.png')"
      );
    break;
    case "AAKON":
    $("#option" + optionNum).css(
        "background-image",
      "url('../images/selectPlanet/option6.png')"
    );
      break;
    case "CENTAURI-IV":
      $("#option" + optionNum).css(
      "background-image",
      "url('../images/selectPlanet/option5.png')"
      );
    break;
    case "HALA":
    $("#option" + optionNum).css(
      "background-image",
        "url('../images/selectPlanet/option8.png')"
      );
    break;
    case "KNOWHERE":
      $("#option" + optionNum).css(
        "background-image",
      "url('../images/selectPlanet/option9.png')"
      );
    break;
    case "SOVEREIGN":
    $("#option" + optionNum).css(
      "background-image",
        "url('../images/selectPlanet/option4.png')"
    );
    break;
    case "XANDAR":
    $("#option" + optionNum).css(
      "background-image",
        "url('../images/selectPlanet/option1.png')"
    );
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
