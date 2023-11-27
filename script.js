// Animation for the typing feature
let type = new Typed("#changing-text", {
  strings: ["Front-end Developer", "DevOps Engineer", "Coding Intructor"],
  typeSpeed: 60,
  backSpeed: 50,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}