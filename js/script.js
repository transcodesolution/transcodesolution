// ***************************************************** technology tab bar *************************
let technologyName = document.querySelectorAll(
    ".technology-frameworks-heading h1"
  );
  let cardTabs = document.querySelectorAll(".frameworks-image-box-con");
  
  // Set initial state
  technologyName[0].style.fontWeight = "600";
  cardTabs[0].classList.add("active");
  
  for (let i = 0; i < technologyName.length; i++) {
    technologyName[i].addEventListener("click", () => {
      // Activate the selected tab
      technologyName[i].style.fontWeight = "600";
      cardTabs[i].classList.add("active");
  
      // Deactivate the other tabs
      for (let j = 0; j < technologyName.length; j++) {
        if (i !== j) {
          technologyName[j].style.fontWeight = "400";
          cardTabs[j].classList.remove("active");
        }
      }
    });
  }


// ***************************************************** ourServicesTab *************************

  let card = document.querySelectorAll(".our-services-sub-box");
let cardData = document.querySelectorAll(".our-services-info-box-right");

card[0].style.backgroundImage = `linear-gradient(
  244.73deg,
  rgba(4, 191, 215, 0.17) -48.91%,
  rgba(99, 56, 139, 0.17) 79.49%
)`;
// card[0].style.boxShadow = "none";
card[0].style.borderInlineStart = "4px solid #63388B";
cardData[0].style.display = "block";

for (let i = 0; i < 8; i++) {
  console.log("object",card[i]);
  card[i].addEventListener("click", (e) => {
    card[i].style.backgroundImage = `linear-gradient(
    244.73deg,
    rgba(4, 191, 215, 0.17) -48.91%,
    rgba(99, 56, 139, 0.17) 79.49%
  )`;
    // card[i].style.boxShadow = "none";
    card[i].style.borderInlineStart = "4px solid #63388B";
    cardData[i].style.display = "block";

    for (let j = 0; j < 8; j++) {
      if (i == j) {
        continue;
      } else {
        card[j].style.backgroundImage = "none";
        card[j].style.boxShadow = "0px 0px 5px 0px #00000030";
        card[j].style.borderInlineStart = "4px solid transparent";
        cardData[j].style.display = "none";
      }
    }
  });
}

// ***************************************************** navBarToggle *************************
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

// ***************************************************** industryHealthcareTab *************************
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

// ***************************************************** Faq *************************
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


// ***************************************************** responsiveNavDropdown *************************

let servicesNav = document.querySelector(".services-nav");
let industriesNav = document.querySelector(".industries-nav");
let dropdown1 = document.querySelector(".services-nav .dropdown-con");
let dropdown2 = document.querySelector(".industries-nav .dropdown-con");
let servicesPlus = document.querySelector(".services-nav .nav-plus-icon");
let servicesMinus = document.querySelector(".services-nav .nav-minus-icon");
let industriesPlus = document.querySelector(".industries-nav .nav-plus-icon");
let industriesMinus = document.querySelector(".industries-nav .nav-minus-icon");

// Function to initialize dropdown functionality
function initializeDropdowns() {
  servicesNav.addEventListener("click", toggleServicesDropdown);
  industriesNav.addEventListener("click", toggleIndustriesDropdown);
}

function toggleServicesDropdown() {
  servicesNav.classList.toggle("show-dropdown");
  dropdown1.style.display = "none";

  if (servicesNav.classList.contains("show-dropdown")) {
    dropdown1.style.display = "block";
    servicesPlus.style.display = "none";
    servicesMinus.style.display = "block";
    industriesPlus.style.display = "block";
    industriesMinus.style.display = "none";
    dropdown2.style.display = "none";
    industriesNav.classList.remove("show-dropdown");
  } else {
    servicesMinus.style.display = "none";
    servicesPlus.style.display = "block";
  }
}

function toggleIndustriesDropdown() {
  industriesNav.classList.toggle("show-dropdown");
  dropdown2.style.display = "none";

  if (industriesNav.classList.contains("show-dropdown")) {
    dropdown2.style.display = "block";
    industriesPlus.style.display = "none";
    industriesMinus.style.display = "block";
    servicesPlus.style.display = "block";
    servicesMinus.style.display = "none";
    dropdown1.style.display = "none";
    servicesNav.classList.remove("show-dropdown");
  } else {
    industriesMinus.style.display = "none";
    industriesPlus.style.display = "block";
  }
}

// Function to handle window resize
function handleResize() {
  if (window.innerWidth <= 1024) {
    initializeDropdowns();
  } else {
    servicesNav.removeEventListener("click", toggleServicesDropdown);
    industriesNav.removeEventListener("click", toggleIndustriesDropdown);
    dropdown1.style.display = "";
    dropdown2.style.display = "";
    servicesPlus.style.display = "";
    servicesMinus.style.display = "";
    industriesPlus.style.display = "";
    industriesMinus.style.display = "";
  }
}

// Listen for window resize
window.addEventListener("resize", handleResize);

// Initial check for window size
handleResize();
