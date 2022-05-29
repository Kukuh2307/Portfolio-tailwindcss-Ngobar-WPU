// hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav-menu");
const toTop = document.querySelector("#to-top");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("hidden");
});

// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// klik di luar hamburger
window.addEventListener('click',function(e){
  if(e.target != hamburger && e.target !=  nav){
    hamburger.classList.remove("hamburger-active");
    nav.classList.add("hidden");
  }
});

// darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage = "dark";
  } else {
    html.classList.remove("dark");
    localStorage = "light";
  }
});