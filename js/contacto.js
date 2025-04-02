export function handleContactForm() {
    document.querySelector('.form-contacto').addEventListener('submit', async function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        try {
            const response = await fetch("https://formsubmit.co/ajax/10588b55013a1b50f635ba1cfd7a2b e4", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    apellido,
                    email,
                    telefono
                })
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Formulario enviado',
                    text: '¡Gracias por contactarnos!',
                    confirmButtonText: 'OK',
                });

                document.querySelector('.form-contacto').reset();
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un problema al enviar el formulario.',
                confirmButtonText: 'Intentar de nuevo',
            });
        }
    });
}
