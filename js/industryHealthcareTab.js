let images = document.querySelectorAll(".past-project-left-box img");
let tabs = document.querySelectorAll(".past-projects-list");

images[0].style.display = "block";
tabs[0].style.background =
  " linear-gradient(244.73deg, rgba(4, 191, 215, 0.3) -48.91%, rgba(99, 56, 139, 0.3) 79.49%)";
tabs[0].style.boxShadow = "none";

for (let i = 0; i < 4; i++) {
  tabs[i].addEventListener("click", () => {
    images[i].style.display = "block";
    tabs[i].style.background =
      " linear-gradient(244.73deg, rgba(4, 191, 215, 0.3) -48.91%, rgba(99, 56, 139, 0.3) 79.49%)";
    tabs[i].style.boxShadow = "none";

    for (let j = 0; j < 4; j++) {
      if (i == j) {
        continue;
      } else {
        images[j].style.display = "none";
        tabs[j].style.background = "transparent";
        tabs[j].style.boxShadow = "0px 0px 10px 0px #00000040";
      }
    }
  });
}
