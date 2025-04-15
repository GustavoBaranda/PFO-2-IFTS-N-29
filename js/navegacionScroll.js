export function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        let offset = 0;

        const offsets = {
            "sobre-mi": 0,
            "proyectos": 70,
            "habilidades": 78,
            "peliculas": 10,
            "contacto": 0
        };

        if (offsets.hasOwnProperty(sectionId)) {
            offset = offsets[sectionId];
        }

        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ 
            top: sectionPosition, 
            behavior: "smooth" 
        });
    } else {
        console.error(`La sección con ID '${sectionId}' no existe.`);
    }
}

export function setupNavigationScroll() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}


