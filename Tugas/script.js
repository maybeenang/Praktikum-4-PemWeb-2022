const humberger = document.querySelector(".header__humberger");
const nav = document.querySelector(".header__nav");
const switchC = document.querySelector("#switch");

switchC.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  nav.classList.toggle("nav_active");
});
