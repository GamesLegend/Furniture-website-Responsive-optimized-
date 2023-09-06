"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("navbar-list-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// DARK MODE
const body = document.querySelector("body");
const span = document.querySelector("span");
const darkMode = document.querySelector(".dark--mode");
const darkModeColor = document.querySelector(".dark--mode--color");
const darkModeIcon = document.querySelector('[name="moon-outline"]');
const active = document.querySelector(".active");
const sectionHero = document.querySelector(".section-hero");
const heroHeading = document.querySelector(".hero-heading");
const heroParagraph = document.querySelector(".hero-paragraph");
const header = document.querySelector(".header");
const visa = document.querySelector(".visa");
const usaToday = document.querySelector(".usa-today");
const newYorkTimes = document.querySelector(".new-york-times");
const iHerb = document.querySelector(".iherb");
const businessInsider = document.querySelector(".business-insider");
const featuredLogo = document.querySelectorAll(".featured-logo");
const featuresIconDescription = document.querySelectorAll(
  ".features-icon-description"
);
const featuresSectionDescription = document.querySelectorAll(
  ".features-section-description"
);
const typeDescription = document.querySelector(".type-description");
const pageLinks = document.querySelectorAll(".page-link");
const logInGoogle = document.querySelector(".log-in-google");
const logInApple = document.querySelector(".log-in-apple");
const ctaBackground = document.querySelector(".cta-background");
const sectionTestimonials = document.querySelector(".section-testimonials");
const testimonialsBox = document.querySelectorAll(".testimonials-box");
const footerIconLInk = document.querySelectorAll(".footer-icon-link");
const footerLink = document.querySelectorAll(".footer-link");
const menuOutline = document.querySelector(".menu-outline");
const closeOutline = document.querySelector(".close-outline");

// Dark mode event handler
darkMode.addEventListener("click", function () {
  const currentName = darkModeIcon.getAttribute("name");

  // Toggle between "sunny-outline" and "moon-outline"
  const newName =
    currentName === "sunny-outline" ? "moon-outline" : "sunny-outline";

  // Set the new name attribute value for darkModeIcon
  darkModeIcon.setAttribute("name", newName);

  for (let i = 0; i < featuresIconDescription.length; i++) {
    featuresIconDescription[i].classList.toggle("dark--mode--color");
  }

  for (let i = 0; i < featuresSectionDescription.length; i++) {
    featuresSectionDescription[i].classList.toggle("dark--mode--color");
  }

  for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].classList.toggle("dark--mode--color");
  }

  for (let i = 0; i < testimonialsBox.length; i++) {
    testimonialsBox[i].classList.toggle("active");
  }

  for (let i = 0; i < footerIconLInk.length; i++) {
    footerIconLInk[i].classList.toggle("dark--mode--color");
  }

  for (let i = 0; i < footerLink.length; i++) {
    footerLink[i].classList.toggle("dark--mode--color");
  }

  document.body.classList.toggle("dark-mode");
  const darkModeActive = document.body.classList.contains("dark-mode");

  if (darkModeActive) {
    // Switch to dark mode logos
    visa.src = "img/logos/visa-light.png";
    usaToday.src = "img/logos/usa-today-light.png";
    iHerb.src = "img/logos/iherb-logo-light.png";
    businessInsider.src = "img/logos/business-insider-light.png";
    newYorkTimes.src = "img/logos/the-new-york-times-light.png";
  } else {
    // Switch back to light mode logos
    visa.src = "img/logos/Visa-01.png";
    usaToday.src = "img/logos/usa-today.png";
    iHerb.src = "img/logos/iHerb-logo.png";
    businessInsider.src = "img/logos/business-insider.png";
    newYorkTimes.src = "img/logos/the-new-york-times.png";
  }

  document.body.classList.toggle("active");
  sectionHero.classList.toggle("transparent");
  header.classList.toggle("transparent");
  darkMode.classList.toggle("dark--mode--color");
  heroHeading.classList.toggle("dark--mode--color");
  heroParagraph.classList.toggle("dark--mode--color");
  typeDescription.classList.toggle("dark--mode--color");
  document.querySelector(".dots").classList.toggle("dark--mode--color");
  logInGoogle.classList.toggle("dark--mode--color");
  logInApple.classList.toggle("dark--mode--color");
  ctaBackground.classList.toggle("active");
  sectionTestimonials.classList.toggle("dark--mode--color");
  sectionTestimonials.classList.toggle("active");
  menuOutline.style.color = "#fff";
  closeOutline.style.color = "#fff";
});
