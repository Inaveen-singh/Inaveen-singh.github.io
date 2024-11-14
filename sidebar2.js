const leftToggle = document.querySelector(".left-toggle");
const rightToggle = document.querySelector(".right-toggle");
const articleNavigation = document.querySelector("#article-navigation");
const articlePreference = document.querySelector("#article-preference");
const body = document.body;

// Track if the left and right sidebar is open
let isLeftOpen = false;
let isRightOpen = false;

leftToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click event from reaching the document
  isLeftOpen ? closeLeft() : openLeft();
});

rightToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click event from reaching the document
  isRightOpen ? closeRight() : openRight();
});
/* */
document.addEventListener("click", (e) => {
  // Check if the click is outside the left sidebar and the toggle button

  if (!articleNavigation.contains(e.target) && e.target !== leftToggle) {
    if (isLeftOpen) {
      closeLeft();
    }
  }
});

function openLeft() {
  leftToggle.setAttribute("aria-expanded", "true");
  articleNavigation.setAttribute("data-state", "opened");
  isLeftOpen = true; // Track left sidebar as open
}

function closeLeft() {
  leftToggle.setAttribute("aria-expanded", "false");
  articleNavigation.setAttribute("data-state", "closing");

  // Listen for the end of the closing animation
  /* articleNavigation.addEventListener('animationend', () => {
    articleNavigation.setAttribute('data-state', "closed");
  }, {once: true});*/

  body.addEventListener(
    "transitionend",
    () => {
      articleNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );

  isLeftOpen = false; // Track left sidebar as closed
}

document.addEventListener("click", (e) => {
  // Check if the click is outside the left sidebar and the toggle button
  if (!articlePreference.contains(e.target) && e.target !== rightToggle) {
    if (isRightOpen) {
      closeRight();
    }
  }
});

function openRight() {
  rightToggle.setAttribute("aria-expanded", "true");
  articlePreference.setAttribute("data-state", "opened");
  isRightOpen = true; // Track right sidebar as open
}

function closeRight() {
  rightToggle.setAttribute("aria-expanded", "false");
  articlePreference.setAttribute("data-state", "closing");

  // Listen for the end of the closing animation
  /*
  articlePreference.addEventListener('animationend', () => {
    articlePreference.setAttribute('data-state', "closed");
  }, {once: true});
*/

  body.addEventListener(
    "transitionend",
    () => {
      articlePreference.setAttribute("data-state", "closed");
    },
    { once: true }
  );

  isRightOpen = false; // Track right sidebar as closed
}
