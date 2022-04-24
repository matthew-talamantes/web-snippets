const toggleMenu = () => {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbarSupporedtContent");
  btn.classList.toggle("expanded");
  menu.classList.toggle("collapsed");
};

document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
