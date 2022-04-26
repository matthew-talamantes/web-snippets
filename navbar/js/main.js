const toggleMenu = () => {
  const navbar = document.getElementsByClassName("navbar")[0];
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbarSupporedtContent");
  const navLinks = Array.from(document.getElementsByClassName("nav-link"));
  const navItems = Array.from(document.getElementsByClassName("nav-item"));
  let expandedHeight = navItems[0].offsetHeight * navItems.length + 50;
  const ariaExpand = btn.getAttribute("aria-expanded");
  let ariaState = "";
  let hiddenState = "";
  let tabIndex = "";
  if (ariaExpand === "true") {
    ariaState = "false";
    hiddenState = "true";
    tabIndex = "-1";
    navbar.style.height = "50px";
  } else {
    ariaState = "true";
    hiddenState = "flase";
    tabIndex = "0";
    navbar.style.height = `${expandedHeight}px`;
  }
  btn.classList.toggle("expanded");
  btn.setAttribute("aria-expanded", ariaState);
  menu.setAttribute("aria-hidden", hiddenState);
  menu.classList.toggle("collapsed");
  navbar.classList.toggle("expanded");
  navLinks.forEach((link) => link.setAttribute("tabindex", tabIndex));
};

const screenCheck = () => {
  if (screen.width < 800) {
    const navLinks = Array.from(document.getElementsByClassName("nav-link"));
    navLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
  } else {
    const navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.height = "50px";
  }
};

screenCheck();
document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
window.onresize = screenCheck;
