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

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active"); // Toggle the "active" class on the clicked card
  });
});
// cards.forEach((wrapper) => {
//   wrapper.addEventListener("click", () => {
//     cards.forEach((wrapper) => {
//       wrapper.classList.remove("active"); // Remove "active" class from all image wrappers
//     });
//     wrapper.classList.add("active"); // Add "active" class to the clicked image wrapper
//   });
// });

// ARIA ATTRIBUTES

const images = document.querySelectorAll(".card img");

// Add click event listener to each image
images.forEach((image) => {
  image.addEventListener("click", () => {
    const caption = image.nextElementSibling; // Get the corresponding caption element
    console.log(caption);
    // Toggle the visibility of the caption
    caption.classList.toggle("show");

    // Toggle the aria-pressed attribute value
    const isPressed = image.getAttribute("aria-pressed") === "true";
    image.setAttribute("aria-pressed", !isPressed);
    console.log(isPressed);
  });
});
