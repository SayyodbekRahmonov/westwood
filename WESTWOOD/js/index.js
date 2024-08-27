const scrollTop = document.querySelector(".scrollTop");
const nav_menu = document.querySelector(".nav_menu");
const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask");
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  mask.classList.add("hide")
  setTimeout(() => {
    mask.remove()
  }, 1000);
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
