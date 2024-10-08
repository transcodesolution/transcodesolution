let ourWorkHeading = document.querySelectorAll(".our-portfolio-hading");
let ourWorkCard = document.querySelectorAll(".our-portfolio-cards-con");

ourWorkCard[0].style.display = "flex";
ourWorkHeading[0].style.borderBlockEnd = "2px solid #3f3f3f";

for (let i = 0; i < 4; i++) {
  ourWorkHeading[i].addEventListener("click", () => {
    ourWorkHeading[i].style.borderBlockEnd = "2px solid #3f3f3f";
    ourWorkCard[i].style.display = "flex";
    for (let j = 0; j < 4; j++) {
      if (i == j) {
        continue;
      } else {
        ourWorkCard[j].style.display = "none";
        ourWorkHeading[j].style.borderBlockEnd = "none";
      }
    }
  });
}
