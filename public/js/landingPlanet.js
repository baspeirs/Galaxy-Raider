$(document).ready(() => {
  $("#leave-planet").on("click", () => {
    const url = window.location.pathname;
    const charID = url.substring(url.lastIndexOf("/") + 1);
    // console.log("leave planet");
    window.location.replace("/selectplanet/" + charID);
  });
});
