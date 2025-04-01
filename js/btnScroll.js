export function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scrollToTop');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });
  
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
}
