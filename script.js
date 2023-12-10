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
