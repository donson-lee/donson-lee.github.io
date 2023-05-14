const hamburger = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector(".close-icon");

hamburger.onclick = () => {
  closeIcon.classList.toggle("active");
  hamburger.classList.remove("menu-icon");
  navbar.classList.toggle("activate");
};

closeIcon.onclick = () => {
  hamburger.classList.toggle("menu-icon");
  closeIcon.classList.remove("active");
  navbar.classList.remove("activate");
};

navbar.onclick = () => {
  closeIcon.classList.remove("active");
  navbar.classList.remove("activate");
  hamburger.classList.toggle("menu-icon");
};
