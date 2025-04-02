export function initScrollToTop() {
  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");

    if (scrollToTopButton) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          scrollToTopButton.classList.add("show");
        } else {
          scrollToTopButton.classList.remove("show");
        }
      });

      scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  });
}
