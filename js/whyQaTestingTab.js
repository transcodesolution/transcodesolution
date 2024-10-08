let qaTabs = document.querySelectorAll(
  ".Why-Should-You-Choose-UIUX-Design-tab-box"
);
let qaTabsP1 = document.querySelectorAll(
  ".Why-Should-You-Choose-UIUX-Design-tab-box-p1"
);
let qaTabsP2 = document.querySelectorAll(
  ".Why-Should-You-Choose-UIUX-Design-tab-box-p2"
);

qaTabsP1[0].style.borderBottom = "1px solid #3f3f3f";
qaTabsP2[0].style.display = "block";

for (let i = 0; i < 4; i++) {
  qaTabs[i].addEventListener("click", () => {
    qaTabsP1[i].style.borderBottom = "1px solid #3f3f3f";
    qaTabsP2[i].style.display = "block";
    for (let j = 0; j < 4; j++) {
      if (i == j) {
        continue;
      } else {
        qaTabsP1[j].style.borderBottom = "none";
        qaTabsP2[j].style.display = "none";
      }
    }
  });
}
