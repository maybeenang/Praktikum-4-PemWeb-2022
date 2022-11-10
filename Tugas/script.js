const humberger = document.querySelector(".header__humberger");
const nav = document.querySelector(".header__nav");

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  nav.classList.toggle("nav_active");
});
