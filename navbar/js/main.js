const setMenuState = (state) => {
  const navbar = document.getElementsByClassName("navbar")[0];
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbarSupporedtContent");
  const navLinks = Array.from(document.getElementsByClassName("nav-link"));
  const navItems = Array.from(document.getElementsByClassName("nav-item"));
  let expandedHeight = navItems[0].offsetHeight * navItems.length + 50;
  let ariaState = "";
  let hiddenState = "";
  let tabIndex = "";
  if (state === "true") {
    ariaState = "true";
    hiddenState = "false";
    tabIndex = "0";
    navbar.style.height = `${expandedHeight}px`;
    if (!btn.classList.contains("expanded")) {
      btn.classList.add("expanded");
      menu.classList.remove("collapsed");
      navbar.classList.add("expanded");
    }
  } else {
    ariaState = "false";
    hiddenState = "true";
    tabIndex = "-1";
    navbar.style.height = "50px";
    if (btn.classList.contains("expanded")) {
      btn.classList.remove("expanded");
      menu.classList.add("collapsed");
      navbar.classList.remove("expanded");
    }
  }

  btn.setAttribute("aria-expanded", ariaState);
  menu.setAttribute("aria-hidden", hiddenState);
  navLinks.forEach((link) => link.setAttribute("tabindex", tabIndex));
};

const toggleMenu = () => {
  const btn = document.getElementById("menu-toggle");
  const ariaExpand = btn.getAttribute("aria-expanded");
  if (ariaExpand === "true") {
    setMenuState("false");
  } else {
    setMenuState("true");
  }
};

const screenCheck = () => {
  if (screen.width < 800) {
    setMenuState("false");
  } else {
    const navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.height = "50px";
  }
};

screenCheck();
document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
window.onresize = screenCheck;
