const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
menu.addEventListener("click", function () {
  nav.classList.toggle("o-nav");
  nav.classList.contains("o-nav")
    ? (header.style.background = "#f6f6f6 ")
    : (header.style.background = "transparent");
});
