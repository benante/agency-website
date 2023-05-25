//hamburger menu
const menuButton = document.querySelector("#hamburger");
const mainMenu = document.querySelector("#main-menu");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  mainMenu.classList.toggle("visible");
});

//Prevent default open state of hamburger menu on load

document.addEventListener("DOMContentLoaded", function () {
  var mainMenu = document.querySelector("#main-menu");

  if (window.innerWidth > 700) {
    mainMenu.classList.remove("visible");
  } else {
    mainMenu.style.display = "none";
  }
});
