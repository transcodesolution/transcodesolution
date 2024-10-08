let navbar = document.querySelector(".transcodezy-navbar-ul");
let navbarIcon = document.querySelector(".navbar-bars-icon");
let closeIcon = document.querySelector(".close-icon");

navbarIcon.addEventListener("click", () => {
  navbar.style.right = "0";
  // navbar.style.top = "0";
});

closeIcon.addEventListener("click", () => {
  navbar.style.right = "-100%";
  // navbar.style.top = "-100%";
});
