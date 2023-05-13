const button = document.getElementById("darkModeButton");
const nav = document.getElementById("nav-bar");
const img = document.getElementById("img-modo-oscuro");
const main = document.getElementById("main-principal");
let darkMode = false;

button.addEventListener("click", function () {
  if (!darkMode) {
    nav.classList.remove("bg-light");
    nav.classList.remove("navbar-light");
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("navbar-dark");
    main.classList.toggle("dark-mode");
    img.src = "./assets/img/sun-solid-24.png";
    darkMode = true;
  } else {
    nav.classList.toggle("bg-light");
    nav.classList.toggle("navbar-light");
    nav.classList.remove("bg-dark");
    nav.classList.remove("navbar-dark");
    main.classList.remove("dark-mode");
    img.src = "./assets/img/moon-solid-24.png";
    darkMode = false;
  }
});
