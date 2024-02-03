const ham = document.querySelector(".ham");
const container = document.querySelector(".navigation");
const items = document.querySelectorAll(".nav-list>.nav-items");
const home = document.getElementById("home");
const aboutme = document.getElementById("aboutme");
const hobbies = document.getElementById("hobbies");
const contact = document.getElementById("contact");
const skills = document.getElementById("skills");
const body = document.querySelector("body");
const goToTop = document.querySelector(".back-to-top");
const name = document.getElementById("name");

const txt = "Gowtham Kishore";
var speed = 70;

let i = 0;
function typeWriter() {
  if (i < txt.length) {
    name.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

ham.addEventListener("click", (e) => {
  container.classList.toggle("navigation");

  if (ham.innerHTML == "☰") {
    ham.innerHTML = "&#10006;";
  } else {
    ham.innerHTML = "&#9776;";
  }
});

items.forEach((element) => {
  element.addEventListener("click", () => {
    container.classList.toggle("navigation");

    if (ham.innerHTML == "☰") {
      ham.innerHTML = "&#10006;";
    } else {
      ham.innerHTML = "&#9776;";
    }
  });
});

goToTop.addEventListener("click", () => {});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop >= 20 ||
    document.documentElement.scrollTop >= 20
  ) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}
