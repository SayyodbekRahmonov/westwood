const scrollTop = document.querySelector(".scrollTop");
const nav_menu = document.querySelector(".nav_menu");
const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask");
const loader = document.querySelector(".loader");
const arrow_down = document.getElementById("arrow_down");
const arrow_past = document.querySelector(".arrow_down");
const cards = document.querySelector(".cards");

window.addEventListener("load", () => {
  mask.classList.add("hide");
  setTimeout(() => {
    mask.remove();
  }, 1000);
});

arrow_past.addEventListener("click", () => {
  cards.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});

scrollTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

nav_menu.addEventListener("click", () => {
  modal.classList.toggle("active");
});
