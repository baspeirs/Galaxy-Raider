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
// set two variables to boolean to be switched if on home/hostile planet
$(document).ready(() => {
  const backgroundUrls = [
    "../../images/landingPlanet/landingOption6.png",
    "../../images/landingPlanet/landingOption5.png",
    "../../images/landingPlanet/landingOption2.png",
    "../../images/landingPlanet/landingOption8.png",
    "../../images/landingPlanet/landingOption9.png",
    "../../images/landingPlanet/landingOption4.png",
    "../../images/landingPlanet/landingOption1.png",
    "../../images/landingPlanet/landingOption7.png"
  ];
  const $landedPlanet = $("#planetName").text();
  const $hostileplanet = $("#hostilePlanet").text();
  const $homeplanet = $("#homePlanet").text();

  let homePlanet = false;
  let hostilePlanet = false;

  if ($landedPlanet === $homeplanet) {
    homePlanet = true;
  } else if ($landedPlanet !== $homeplanet) {
    homePlanet = false;
  }
  if ($landedPlanet === $hostileplanet) {
    hostilePlanet = true;
  } else if ($landedPlanet !== $hostileplanet) {
    hostilePlanet = false;
  }

  console.log(homePlanet);
  console.log(hostilePlanet);
  console.log($landedPlanet);
  const url = window.location.pathname;
  const charID = url.substring(url.lastIndexOf("/") + 1);

  // Choosing which planet background to display based on planet.
  switch ($landedPlanet) {
    case "Aakon":
      $(".container").css("background-image", "url(" + backgroundUrls[0] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Centauri-IV":
      $(".container").css("background-image", "url(" + backgroundUrls[1] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Terra":
      $(".container").css("background-image", "url(" + backgroundUrls[2] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Hala":
      $(".container").css("background-image", "url(" + backgroundUrls[3] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Knowhere":
      $(".container").css("background-image", "url(" + backgroundUrls[4] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Sovereign":
      $(".container").css("background-image", "url(" + backgroundUrls[5] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Xandar":
      $(".container").css("background-image", "url(" + backgroundUrls[6] + ")");
      // $(".container").css("background-size", "contain");
      break;
    case "Sakaar":
    $(".container").css("background-image", "url(" + backgroundUrls[7] + ")");
      // $(".container").css("background-size", "contain");
    break;
  }

  // On click events for leaving planet and gathering resources.
  $("#leave-planet").on("click", () => {
    window.location.replace("/selectplanet/" + charID);
  });

  $("#gatherRecource").on("click", () => {
    $.ajax("/api/planets/" + $landedPlanet, {
      method: "GET"
    }).then(planetRes => {
      const cookingPoints = planetRes.result.cooking_resources;
      const engiPoints = planetRes.result.engineering_resources;
      const financePoints = planetRes.result.financier_resources;
      console.log(charID);
      $.ajax("/api/characters/" + charID, {
        method: "GET"
      })
        .then(charRes => {
          const charProf = charRes.Profession.profession;
          const charPoints = charRes.score;
          if (charProf === "Engineer") {
            const data = { points: engiPoints + charPoints };
            $.ajax("/api/characters/" + charID, {
              method: "PUT",
              data
            }).then(result => console.log(result));
          } else if (charProf === "Cook") {
            const data = { points: cookingPoints + charPoints };
            $.ajax("/api/characters/" + charID, {
              method: "PUT",
              data
            }).then(result => console.log(result));
          } else {
            const data = { points: financePoints + charPoints };
            $.ajax("/api/characters/" + charID, {
              method: "PUT",
              data
            }).then(result => console.log(result));
          }
        })
        .then(window.location.replace("/selectplanet/" + charID));
    });
  });

  $("#complete-game").on("click", () => {
    document.getElementById("win-modal").showModal();
  });

  $("#returnHome").on("click", () => {
    window.location.replace("/")
  });
});
