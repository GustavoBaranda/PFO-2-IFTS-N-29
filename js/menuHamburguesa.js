export function toggleMenu() {
  document.getElementById("hamburger").addEventListener("click", (e) => {
    e.stopPropagation();
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");

    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");

    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
}
