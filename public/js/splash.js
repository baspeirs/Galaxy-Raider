const $shipImages = $("#shipImages");
const $playButton = $("#playButton");
let activeShip = "";

// Deciding which ship got selected by user.
function addShip() {
  activeShip = $shipImages.val();
  console.log(activeShip);
  return activeShip;
}
$("select").change(addShip);

function addRace() {
  $("#raceSelection h3").on("click", function() {
    console.log($(this).text());
    $(this).addClass("selected");
    $("#raceSelection h3")
      .not(this)
      .addClass("notselected");
  });
}
$("#raceSelection").on("click", addRace());

// Checking to make sure all requirements are met before allowing object to be built.
function checkRequirements() {
  activeShip = addShip();
  activeRace = addRace();
  if (activeShip === "") {
    console.log("Please select a ship.");
  } else {
    console.log(activeShip, "To be sent to the back-end");
  }
}

$playButton.on("click", checkRequirements);
