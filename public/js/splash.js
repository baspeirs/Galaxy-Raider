const $shipImages = $("#shipImages");
const $raceSelection = $("#raceSelection");
const $playButton = $("#playButton");
let requirements = false;
let selectedShip = "";
let selectedRace = "";
let selectedAge = "";
let selectedProfession = "";
let gameSettings = {};

$(document).ready(() => {
  console.log("Ready!");
  // Getting user's choice on ship and putting value in selectedShip.
  $($shipImages).change(function() {
    const activeShip = this.value;
    selectedShip = activeShip;
    console.log(selectedShip);
  });
  // Getting user's choice on race and putting value in selectedRace.
  $(".raceTag").on("click", function() {
    console.log($(this).text());
    const activeRace = $(this).text();
    $(".raceTag").removeClass("selected");
    $(this).addClass("selected");
    selectedRace = activeRace;
    console.log(selectedRace);
  });
  // Getting user's choice on age and putting value in selectedAge.
  $(".ageTag").on("click", function() {
    console.log($(this).text());
    const activeAge = $(this).text();
    $(".ageTag").removeClass("selected");
    $(this).addClass("selected");
    selectedAge = activeAge;
    console.log(selectedAge);
  });
  // Getting user's choice on profession and putting value in selectedProfession.
  $(".professionTag").on("click", function() {
    console.log($(this).text());
    const activeProfession = $(this).text();
    $(".professionTag").removeClass("selected");
    $(this).addClass("selected");
    selectedProfession = activeProfession;
    console.log(selectedProfession);
  });
  // Name function gets loaded when user clicks the play button.
  // If user meets the requirements they I presented with a modal to enter name.
  // If user doesn't meet the requirements they are asked to do so to continue.
  function enterName() {
    const userName = "";
    document.getElementById("dialog-name").showModal();
    $("#nameSubmit").on("click", () => {
      const userName = $("#name_field").val();
      console.log(userName);
      loadValues(userName);
      // Load user into startingPlanet.html
      window.location.replace("/startingplanet");
      return userName;
    });
    // Load next page.
  }
  function loadValues(userName) {
    // bring in an array. load function on async await.
    console.log(selectedShip);
    console.log(selectedRace);
    console.log(selectedAge);
    console.log(selectedProfession);
    gameSettings = {
      // figure out where to load async await into.
      ship: selectedShip,
      race: selectedRace,
      age: selectedAge,
      profession: selectedProfession,
      name: userName
    };
    console.log(gameSettings);
    sendCharacter(gameSettings);
    return gameSettings;
  }
  // Checking to make sure all requirements are met before creating userName.
  function checkRequirements() {
    requirements = true;
    console.log(requirements); // make into boolean maybe?
    // Checking for ship.
    if (selectedShip === "") {
      console.log("Please select a ship.");
      requirements = false;
      document.getElementById("dialog-ship").showModal();
    } else if (selectedShip.length > 1) {
      console.log(selectedShip, "To be sent to the back-end");
    } // Checking for race.
    if (selectedRace === "") {
      console.log("Please select a race.");
      requirements = false;
      document.getElementById("dialog-race").showModal();
    } else if (selectedRace.length > 1) {
      console.log(selectedRace, "To be sent to the back-end.");
    } // Checking for age
    if (selectedAge === "") {
      console.log("Please select an age.");
      requirements = false;
      document.getElementById("dialog-age").showModal();
    } else if (selectedAge.length > 1) {
      console.log(selectedAge, "To be sent to the back-end.");
    } // Checking for profession.
    if (selectedProfession === "") {
      console.log("Please select an profession.");
      requirements = false;
      document.getElementById("dialog-profession").showModal();
    } else if (selectedProfession.length > 1) {
      console.log(selectedProfession, "To be sent to the back-end.");
    } // Checking to see if all requirements are met before calling enterName function.
    if (!requirements) {
      console.log("Please enter the required information.");
    } else {
      console.log("Requirements are met.");
      enterName();
    }
  }
  $playButton.on("click", checkRequirements);

  // A function for making AJAX call to send gameSettings data.
  const sendCharacter = gameSettings => {
    console.log("From splash.js AJAX: ", gameSettings);
    return $.ajax({
      url: "/",
      data: gameSettings,
      method: "POST"
    });
  };
});
