//hamburger menu
const hamburgerButton = document.getElementById("hamburger");
const menuList = document.getElementById("menu");

hamburgerButton.addEventListener("click", function () {
  menuList.classList.toggle("open");

  const expanded = hamburgerButton.getAttribute("aria-expanded");
  hamburgerButton.setAttribute(
    "aria-expanded",
    String(expanded === "true" ? false : true)
  );

  const hidden = menuList.getAttribute("aria-hidden");
  menuList.setAttribute(
    "aria-hidden",
    String(hidden === "true" ? false : true)
  );
});
