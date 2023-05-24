//hamburger menu
const menuButton = document.querySelector("#hamburger");
const mainMenu = document.querySelector("#main-menu");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  mainMenu.classList.toggle("visible");
});

// Team Section
const cards = document.querySelectorAll(".card");

cards.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    cards.forEach((wrapper) => {
      wrapper.classList.remove("active"); // Remove "active" class from all image wrappers
    });
    wrapper.classList.add("active"); // Add "active" class to the clicked image wrapper
  });
});
