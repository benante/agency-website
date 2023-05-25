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

// Open cards with Enter or Space
cards.forEach((card) => {
  card.addEventListener("click", toggleCaption);
  card.addEventListener("keydown", handleKeyPress);
});

function toggleCaption(event) {
  const card = event.currentTarget;
  const caption = card.querySelector(".image-caption");

  card.classList.toggle("active");
  caption.classList.toggle("show");
}

function handleKeyPress(event) {
  const key = event.key;
  const card = event.currentTarget;
  const caption = card.querySelector(".image-caption");

  if (key === "Enter" || key === " ") {
    event.preventDefault();
    toggleCaption(event);
  }
}
