const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrolledY = this.window.scrollY;
  // console.log(`---${scrolledY}---`);
  scrolledY >= 50
    ? header.classList.add("header")
    : header.classList.remove("header");
});

menu.addEventListener("click", function () {
  nav.classList.toggle("o-nav");
});
