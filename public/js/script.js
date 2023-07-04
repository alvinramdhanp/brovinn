const menuToggle = document.getElementById("toggle");
const menuLinks = document.getElementById("menulink");

menuToggle.addEventListener("click", function () {
  menuLinks.classList.toggle("slide");
});
