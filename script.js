const menuButton = document.querySelector("#hamburger");
const mainMenu = document.querySelector("#main-menu");
const navlinks = document.querySelectorAll(".links");
const logoLink = document.querySelector(".logo");

mainMenu.classList.remove("visible");

menuButton.addEventListener("click", () => {
  console.log("clicked");
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  mainMenu.classList.toggle("visible");
});

const handleClick = () => {
  mainMenu.classList.remove("visible");
};

const mediaQuery = window.matchMedia("(max-width: 768px)");

navlinks.forEach((navLink) => {
  navLink.addEventListener("click", handleClick);
});

mediaQuery.addListener((e) => {
  if (!e.matches) {
    mainMenu.classList.remove("visible");
  }
});

// When such a link is clicked, it prevents the default scroll behavior and calculates the target section's position.
// The offset variable represents the height of your fixed header or any other elements that need to be offset. Adjust this value according to the actual height of your fixed header.

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var target = document.querySelector(this.getAttribute("href"));
      var offset = 100; // Adjust the offset value to match the height of your fixed header

      if (target) {
        var targetPosition =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// TEAM SECTION

// Cards
const cards = document.querySelectorAll(".card");

// Open cards with Enter or Space or when clicked
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

// Aria attributes
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

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Display the success message
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  // Reset the form fields
  form.reset();
});
