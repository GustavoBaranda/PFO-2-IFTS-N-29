export function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelectorAll("#menu a");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}
