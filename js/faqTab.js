let faqTab = document.querySelectorAll(".faq-list-box");
let minusIcon = document.querySelectorAll(".minus-faq");
let plusIcon = document.querySelectorAll(".plus-faq");
let faqAnswers = document.querySelectorAll(".faq-answers");
let faqHeader = document.querySelectorAll(".faq");

faqTab.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    const isVisible = faqAnswers[i].style.display === "block";

    console.log(isVisible);

    // Toggle the clicked FAQ
    plusIcon[i].style.display = isVisible ? "block" : "none";
    minusIcon[i].style.display = isVisible ? "none" : "block";
    faqAnswers[i].style.display = isVisible ? "none" : "block";
    faqHeader[i].style.background = isVisible
      ? "transparent"
      : "linear-gradient(244.73deg,rgba(4, 191, 215, 0.3) -48.91%,rgba(99, 56, 139, 0.3) 79.49%)";
    faqHeader[i].style.borderRadius = isVisible ? "5px" : "5px 5px 0 0";
    faqTab[i].style.borderRadius = isVisible ? "5px" : "5px 5px 0 0";
    faqTab[i].style.boxShadow = isVisible
      ? "0px 0px 15px 0px #00000040"
      : "none";

    // Hide other FAQs
    faqTab.forEach((otherTab, j) => {
      if (i !== j) {
        plusIcon[j].style.display = "block";
        minusIcon[j].style.display = "none";
        faqAnswers[j].style.display = "none";
        faqHeader[j].style.borderRadius = "5px";
        faqHeader[j].style.background = "transparent";
        faqHeader[j].style.boxShadow = "none";
        otherTab.style.boxShadow = "0px 0px 15px 0px #00000040";
      }
    });
  });
});
