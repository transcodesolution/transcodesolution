let card = document.querySelectorAll(".our-services-sub-box");
let cardData = document.querySelectorAll(".our-services-info-box-right");

card[0].style.backgroundImage = `linear-gradient(
  244.73deg,
  rgba(4, 191, 215, 0.17) -48.91%,
  rgba(99, 56, 139, 0.17) 79.49%
)`;
card[0].style.boxShadow = "none";
card[0].style.borderInlineStart = "4px solid #63388B";
cardData[0].style.display = "block";

for (let i = 0; i < 8; i++) {
  card[i].addEventListener("click", (e) => {
    card[i].style.backgroundImage = `linear-gradient(
    244.73deg,
    rgba(4, 191, 215, 0.17) -48.91%,
    rgba(99, 56, 139, 0.17) 79.49%
  )`;
    card[i].style.boxShadow = "none";
    card[i].style.borderInlineStart = "4px solid #63388B";
    cardData[i].style.display = "block";

    for (let j = 0; j < 8; j++) {
      if (i == j) {
        continue;
      } else {
        card[j].style.backgroundImage = "none";
        card[j].style.boxShadow = "0px 0px 5px 0px #00000030";
        card[j].style.borderInlineStart = "none";
        cardData[j].style.display = "none";
      }
    }
  });
}
