const images = document.querySelectorAll(".past-project-left-box img");
const tabs = document.querySelectorAll(".past-projects-list");

function setActiveTab(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.style.background =
        "linear-gradient(244.73deg, rgba(4, 191, 215, 0.3) -48.91%, rgba(99, 56, 139, 0.3) 79.49%)";
      tab.style.boxShadow = "none";
    } else {
      tab.style.background = "transparent";
      tab.style.boxShadow = "0px 0px 10px 0px #00000040";
    }
  });
}

// Set initial active tab
setActiveTab(0);

// Add event listeners
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => setActiveTab(i));
});

document.addEventListener("DOMContentLoaded", function () {

  const currentPath = window.location.pathname
    .replace(/\/$/, "")          // remove trailing slash
    .replace(".html", "")        // remove .html
    .split("/")
    .pop();

  const navLinks = document.querySelectorAll(
    '.transcodezy-navbar-ul > li > a, .transcodezy-navbar-ul > li > .flex_wrapper > a'
  );

  const dropdownLinks = document.querySelectorAll(".dropdown-con a");

  function normalizeHref(href) {
    return href
      .replace(window.location.origin, "")
      .replace(/^\//, "")
      .replace(".html", "")
      .replace(/\/$/, "");
  }

  navLinks.forEach(link => {
    const linkPath = normalizeHref(link.getAttribute("href"));

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  dropdownLinks.forEach(link => {
    const linkPath = normalizeHref(link.getAttribute("href"));

    if (linkPath === currentPath) {
      link.classList.add("active");

      const parentNav = link.closest(".services-nav, .industries-nav, .company-nav");
      if (parentNav) {
        parentNav.querySelector(".flex_wrapper a")?.classList.add("active");
      }
    }
  });

});

// ************************************* our portfoliotab *************************************
const ourWorkHeading = document.querySelectorAll(".our-portfolio-hading");
const ourWorkCard = document.querySelectorAll(".our-portfolio-cards-con");

if (ourWorkHeading.length > 0 && ourWorkCard.length > 0) {
  ourWorkCard[0].style.display = "flex";
  ourWorkHeading[0].style.borderBlockEnd = "2px solid #63388b";

  ourWorkHeading.forEach((heading, i) => {
    heading.addEventListener("click", () => {
      ourWorkHeading.forEach((h, j) => {
        h.style.borderBlockEnd = "transparent";
        ourWorkCard[j].style.display = "none";
      });

      heading.style.borderBlockEnd = "2px solid #63388b";
      ourWorkCard[i].style.display = "flex";
    });
  });
}

// **************************************** document upload *************************************

const file = document.querySelector(".document-input-box");
const input = document.querySelector(".document-input-box input");

if (file && input) {
  file.addEventListener("click", () => {
    input.click();
  });
}