import { toggleMenu } from './menuHamburguesa.js';
import { initScrollToTop } from './btnScroll.js';
import { scrollToSection, setupNavigationScroll } from './navegacionScroll.js';
import { iniciarCarrusel } from './habilidades.js';
import { cargarPeliculas } from './peliculas.js';
import { handleContactForm } from './contacto.js';

toggleMenu();
initScrollToTop();
setupNavigationScroll(); 
iniciarCarrusel();
cargarPeliculas();
handleContactForm();


