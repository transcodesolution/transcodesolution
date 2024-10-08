let technologyName = document.querySelectorAll(
  ".technology-frameworks-heading h1"
);
let cardTabs = document.querySelectorAll(".frameworks-image-box-con");

technologyName[1].style.fontWeight = "600";
cardTabs[1].style.display = "flex";

for (let i = 0; i < 4; i++) {
  technologyName[i].addEventListener("click", () => {
    technologyName[i].style.fontWeight = "600";
    cardTabs[i].style.display = "flex";

    for (let j = 0; j < 4; j++) {
      if (i == j) {
        continue;
      } else {
        technologyName[j].style.fontWeight = "400";
        cardTabs[j].style.display = "none";
      }
    }
  });
}
