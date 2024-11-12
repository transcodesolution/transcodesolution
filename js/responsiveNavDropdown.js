let servicesNav = document.querySelector(".services-nav");
let industriesNav = document.querySelector(".industries-nav");
let companyNav = document.querySelector(".company-nav");
let dropdown1 = document.querySelector(".services-nav .dropdown-con");
let dropdown2 = document.querySelector(".industries-nav .dropdown-con");
let dropdown3 = document.querySelector(".company-nav .dropdown-con");
let servicesPlus = document.querySelector(".services-nav .nav-plus-icon");
let servicesMinus = document.querySelector(".services-nav .nav-minus-icon");
let industriesPlus = document.querySelector(".industries-nav .nav-plus-icon");
let industriesMinus = document.querySelector(".industries-nav .nav-minus-icon");
let companyPlus = document.querySelector(".company-nav .nav-plus-icon");
let companyMinus = document.querySelector(".company-nav .nav-minus-icon");

// Function to initialize dropdown functionality
function initializeDropdowns() {
  servicesNav.addEventListener("click", toggleServicesDropdown);
  industriesNav.addEventListener("click", toggleIndustriesDropdown);
  companyNav.addEventListener("click", toggleCompanyDropdown);
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
    companyPlus.style.display = "block";
    companyMinus.style.display = "none";
    dropdown2.style.display = "none";
    dropdown3.style.display = "none";
    industriesNav.classList.remove("show-dropdown");
    companyNav.classList.remove("show-dropdown");
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
    companyPlus.style.display = "block";
    companyMinus.style.display = "none";
    dropdown1.style.display = "none";
    dropdown3.style.display = "none";
    servicesNav.classList.remove("show-dropdown");
    companyNav.classList.remove("show-dropdown");
  } else {
    industriesMinus.style.display = "none";
    industriesPlus.style.display = "block";
  }
}
function toggleCompanyDropdown() {
  companyNav.classList.toggle("show-dropdown");
  dropdown3.style.display = "none";

  if (companyNav.classList.contains("show-dropdown")) {
    dropdown3.style.display = "block";
    companyPlus.style.display = "none";
    companyMinus.style.display = "block";
    servicesPlus.style.display = "block";
    servicesMinus.style.display = "none";
    industriesPlus.style.display = "block";
    industriesMinus.style.display = "none";
    dropdown1.style.display = "none";
    dropdown2.style.display = "none";
    servicesNav.classList.remove("show-dropdown");
    industriesNav.classList.remove("show-dropdown");
  } else {
    companyMinus.style.display = "none";
    companyPlus.style.display = "block";
  }
}

// Function to handle window resize
function handleResize() {
  if (window.innerWidth <= 1024) {
    initializeDropdowns();
  } else {
    servicesNav.removeEventListener("click", toggleServicesDropdown);
    industriesNav.removeEventListener("click", toggleIndustriesDropdown);
    companyNav.removeEventListener("click", toggleCompanyDropdown);
    dropdown1.style.display = "";
    dropdown2.style.display = "";
    dropdown3.style.display = "";
    servicesPlus.style.display = "";
    servicesMinus.style.display = "";
    industriesPlus.style.display = "";
    industriesMinus.style.display = "";
    companyPlus.style.display = "";
    companyMinus.style.display = "";
  }
}

// Listen for window resize
window.addEventListener("resize", handleResize);

// Initial check for window size
handleResize();
