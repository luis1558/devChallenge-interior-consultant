const navbar = document.querySelector("nav");
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
navbar.classList.toggle("open");
menuButton.classList.toggle("clicked");
});