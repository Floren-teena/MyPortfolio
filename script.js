// Animation for the typing feature
let type = new Typed("#changing-text", {
  strings: ["Front-end Developer", "DevOps Engineer", "Coding Instructor"],
  typeSpeed: 60,
  backSpeed: 50,
  loop: true,
});

// Code to implement dynamic change in the active link and tab on About Page
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright text with the current year
document.getElementById(
  "copyright"
).textContent = `${currentYear} Florentina Antigha | All Rights Reserved`;

// Scroll to Top icon implementation
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTop");

  window.onscroll = function () {
    // Show/hide the scroll to top button based on scroll position and page location
    var scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    var firstPageHeight = document.getElementById("index-page").offsetHeight;

    if (scrollPosition > firstPageHeight / 2) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  };
});

function scrollToTop() {
  // Smooth scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
}
