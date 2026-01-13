let technologyName = document.querySelectorAll(
  ".technology-frameworks-heading h3"
);
let cardTabs = document.querySelectorAll(".frameworks-image-box-con");

technologyName[0].classList.add("active");
cardTabs[0].classList.add("active");

for (let i = 0; i < technologyName.length; i++) {
  technologyName[i].addEventListener("click", () => {
    for (let j = 0; j < technologyName.length; j++) {
      technologyName[j].classList.remove("active");
      cardTabs[j].classList.remove("active");
    }

    technologyName[i].classList.add("active");
    cardTabs[i].classList.add("active");
  });
}


