export function handleContactForm() {
    document.querySelector('.form-contacto').addEventListener('submit', async function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoRegex = /^\d{10}$/; 

       
        if (!nombre || !apellido || !email || !telefono) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos vacíos',
                text: 'Todos los campos son obligatorios.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (nombre.length < 4) {
            Swal.fire({
                icon: 'error',
                title: 'Nombre inválido',
                text: 'El nombre debe tener al menos 4 caracteres.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (apellido.length < 4) {
            Swal.fire({
                icon: 'error',
                title: 'Apellido inválido',
                text: 'El apellido debe tener al menos 4 caracteres.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Correo inválido',
                text: 'Por favor, introduce un correo electrónico válido. Ejemplo: usuario@correo.com',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!telefonoRegex.test(telefono)) {
            Swal.fire({
                icon: 'error',
                title: 'Teléfono inválido',
                text: 'El número de teléfono debe contener exactamente 10 dígitos.',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            const response = await fetch("https://formsubmit.co/ajax/10588b55013a1b50f635ba1cfd7a2be4", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ nombre, apellido, email, telefono })
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



