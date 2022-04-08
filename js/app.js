const modalImagen = document.querySelector('#modal-imagen');
modalImagen.addEventListener('show.bs.modal', function(e) {
    const enlace = e.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');
    // construir la imagen 
    const imagen = document.createElement('img');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'imagen galeria';

    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(imagen);
    
    // console.log(imagen);
});

modalImagen.addEventListener('hidden.bs.modal', function () {
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';
})