// HAMBURGER MENU
const menuButton = document.querySelector("#hamburger");
const mainMenu = document.querySelector("#main-menu");

const logoLink = document.querySelector(".logo");

mainMenu.classList.remove("visible");

menuButton.addEventListener("click", () => {
  console.log(`clicked`);
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  mainMenu.classList.toggle("visible");
});
