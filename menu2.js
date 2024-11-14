const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".primary-navigation");

// Track if the menu is open
let isMenuOpen = false;

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click event from reaching the document
  isMenuOpen ? closeMenu() : openMenu();
});

document.addEventListener("click", (e) => {
  // Check if the click is outside the menu and the toggle button
  if (!siteNavigation.contains(e.target) && e.target !== menuToggle) {
    if (isMenuOpen) {
      closeMenu();
    }
  }
});

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  siteNavigation.setAttribute("data-state", "opened");
  isMenuOpen = true; // Track menu as open
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNavigation.setAttribute("data-state", "closing");
  // Listen for the end of the closing animation
  siteNavigation.addEventListener(
    "animationend",
    () => {
      siteNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );

  isMenuOpen = false; // Track menu as closed
}
