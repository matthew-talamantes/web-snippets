const toggleMenu = () => {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbarSupporedtContent");
  const navLinks = Array.from(document.getElementsByClassName("nav-link"));
  const ariaExpand = btn.getAttribute("aria-expanded");
  let ariaState = "";
  let hiddenState = "";
  let tabIndex = "";
  if (ariaExpand === "true") {
    ariaState = "false";
    hiddenState = "true";
    tabIndex = "-1";
  } else {
    ariaState = "true";
    hiddenState = "flase";
    tabIndex = "0";
  }
  btn.classList.toggle("expanded");
  btn.setAttribute("aria-expanded", ariaState);
  menu.setAttribute("aria-hidden", hiddenState);
  menu.classList.toggle("collapsed");
  navLinks.forEach((link) => link.setAttribute("tabindex", tabIndex));
};

document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
if (screen.width < 800) {
  const navLinks = Array.from(document.getElementsByClassName("nav-link"));
  navLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
}
