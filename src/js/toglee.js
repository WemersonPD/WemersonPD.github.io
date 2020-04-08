const navBarMobile = document.querySelector(".navBar");
const toggle = document.querySelector(".toggle");
const links = document.querySelector("[clicando]");

function toggleClick() {
  navBarMobile.appendChild(links);
  links.setAttribute("display", "block");
}
