// Selecciona todas las estrellas
const stars = document.querySelectorAll('.stars i');

// Añade un evento de clic a cada estrella
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Remueve la clase 'active' de todas las estrellas
        stars.forEach((s) => s.classList.remove('active'));

        // Añade la clase 'active' a las estrellas hasta la seleccionada
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });
});

