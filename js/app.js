document.addEventListener('DOMContentLoaded', () => {
    const lenguajes = [
        "html", "css", "sass", "tailwind", "javascript", "typescript",
        "reactjs", "nextjs", "nodejs", "firebase", "mysql", "python",
        "django", "php", "csharp"
    ];

    const contenedor = document.querySelector('.carrusel-contenedor');

    // Duplicar el array de lenguajes para el efecto de carrusel infinito
    const lenguajesDuplicados = [...lenguajes, ...lenguajes];

    lenguajesDuplicados.forEach(lenguaje => {
        const item = document.createElement('div');
        item.classList.add('carrusel-item');

        const imagen = document.createElement('img');
        imagen.src = `/assets/${lenguaje}.png`;
        imagen.alt = lenguaje;

        const descripcion = document.createElement('p');
        descripcion.textContent = lenguaje.charAt(0).toUpperCase() + lenguaje.slice(1);

        item.appendChild(imagen);
        item.appendChild(descripcion);
        contenedor.appendChild(item);
    });

    const items = document.querySelectorAll('.carrusel-item');
    const itemWidth = items[0].offsetWidth + 20; // Ancho del item más el margen
    let index = 0;

    function updateCarousel() {
        contenedor.style.transition = 'transform 0.5s ease-in-out';
        contenedor.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    function nextSlide() {
        if (index >= lenguajes.length) {
            index = 0;
            contenedor.style.transition = 'none';
            contenedor.style.transform = 'translateX(0)';
            setTimeout(() => {
                contenedor.style.transition = 'transform 0.5s ease-in-out';
                index++;
                updateCarousel();
            }, 50);
        } else {
            index++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (index <= 0) {
            index = lenguajes.length;
            contenedor.style.transition = 'none';
            contenedor.style.transform = `translateX(${-index * itemWidth}px)`;
            setTimeout(() => {
                contenedor.style.transition = 'transform 0.5s ease-in-out';
                index--;
                updateCarousel();
            }, 50);
        } else {
            index--;
            updateCarousel();
        }
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Desplazamiento automático
    setInterval(nextSlide, 3000);
});
