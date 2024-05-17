document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('publicacion-form');
    const publicacionesContainer = document.getElementById('publicaciones');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Obtener valores del formulario
        const titulo = document.getElementById('titulo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Crear elementos HTML para la nueva publicación
        const nuevaPublicacion = document.createElement('div');
        nuevaPublicacion.classList.add('publicacion');

        const tituloElemento = document.createElement('h3');
        tituloElemento.textContent = titulo;

        const mensajeElemento = document.createElement('p');
        mensajeElemento.textContent = mensaje;

        // Agregar elementos al contenedor de publicaciones
        nuevaPublicacion.appendChild(tituloElemento);
        nuevaPublicacion.appendChild(mensajeElemento);
        publicacionesContainer.appendChild(nuevaPublicacion);

        // Limpiar los campos del formulario después de la publicación
        form.reset();
    });
});
