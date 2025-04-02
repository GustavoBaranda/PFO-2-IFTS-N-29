export function cargarPeliculas() {
    document.addEventListener('DOMContentLoaded', () => {
        const peliculas = [
            {
                titulo: "Volver al Futuro",
                descripcion: "Un adolescente viaja al pasado y se encuentra con sus padres jóvenes.",
                imagen: "./assets/volver-al-futuro.png",
                enlace: "https://www.netflix.com/ar/title/60010110"
            },
            {
                titulo: "Venom",
                descripcion: "Un periodista se fusiona con un simbionte alienígeno.",
                imagen: "./assets/venom.png",
                enlace: "https://www.netflix.com/ar/title/80991034"
            },
            {
                titulo: "The Seven Deadly Sins",
                descripcion: "Un grupo de caballeros busca restaurar la paz en su reino.",
                imagen: "./assets/the-seven-deadly-sins.png",
                enlace: "https://www.netflix.com/ar/title/80050063"
            },   
        ];

        const contenedorPeliculas = document.querySelector('#peliculas .contenedor-peliculas');
        if (!contenedorPeliculas) return;

        peliculas.forEach(pelicula => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');

            const imagen = document.createElement('img');
            imagen.src = pelicula.imagen;
            imagen.alt = pelicula.titulo;

            const contenidoTarjeta = document.createElement('div');
            contenidoTarjeta.classList.add('contenido-tarjeta');

            const titulo = document.createElement('h3');
            titulo.textContent = pelicula.titulo;

            const descripcion = document.createElement('p');
            descripcion.textContent = pelicula.descripcion;

            const enlace = document.createElement('a');
            enlace.href = pelicula.enlace;
            enlace.textContent = 'Ver más';
            enlace.classList.add('btn');

            contenidoTarjeta.appendChild(titulo);
            contenidoTarjeta.appendChild(descripcion);
            contenidoTarjeta.appendChild(enlace);

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(contenidoTarjeta);

            contenedorPeliculas.appendChild(tarjeta);
        });
    });
}
