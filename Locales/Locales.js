document.addEventListener('DOMContentLoaded', function() {
    function handleSliderNavigation(container, direction) {
        const scrollAmount = 300;
        if (direction === 'next') {
            container.scrollLeft += scrollAmount;
        } else {
            container.scrollLeft -= scrollAmount;
        }
    }// Configurar los botones de navegación para cada slider
    document.querySelectorAll('.local-seccion').forEach(section => {
        const slider = section.querySelector('.productos-slider');
        const prevBtn = section.querySelector('.prev-btn');
        const nextBtn = section.querySelector('.next-btn');
        const prevBtn2 = section.querySelector('.prev-btn-2');
        const nextBtn2 = section.querySelector('.next-btn-2');
        const prevBtn3 = section.querySelector('.prev-btn-3');
        const nextBtn3 = section.querySelector('.next-btn-3');
        const prevBtn4 = section.querySelector('.prev-btn-4');
        const nextBtn4 = section.querySelector('.next-btn-4');
        const prevBtn5 = section.querySelector('.prev-btn-5');
        const nextBtn5 = section.querySelector('.next-btn-5');

        if (slider) {
            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
            if (prevBtn2 && nextBtn2) {
                prevBtn2.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn2.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
            if (prevBtn3 && nextBtn3) {
                prevBtn3.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn3.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
            if (prevBtn4 && nextBtn4) {
                prevBtn4.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn4.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
            if (prevBtn5 && nextBtn5) {
                prevBtn5.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn5.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
        }
    });// Funcionalidad del buscador
    const searchInput = document.querySelector('.buscador-locales input');
    const locales = document.querySelectorAll('.local-seccion');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            locales.forEach(local => {
                const localName = local.querySelector('.local-titulo h2').textContent.toLowerCase();
                const productos = local.querySelectorAll('.producto-info h3');
                let found = false;
                if (localName.includes(searchTerm)) {
                    found = true;
                } else {
                    productos.forEach(producto => {
                        if (producto.textContent.toLowerCase().includes(searchTerm)) {
                            found = true;
                        }
                    });
                }
                local.style.display = found ? 'block' : 'none';
            });
        });
    }// Funcionalidad de favoritos con animación de rayo
    document.querySelectorAll('.favorito').forEach(btn => {
        const localSection = btn.closest('.local-seccion'); // Encuentra la sección local correspondiente
        const rayo = localSection.querySelector('.rayo'); // Encuentra el contenedor del rayo
        if (localStorage.getItem(localSection.id) === 'favorito') {
            const icon = btn.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
        }
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            // Activar la animación del rayo solo cuando se hace clic
            localSection.classList.toggle('favorito-activado'); // Activa el rayo
            // Guardar el estado del favorito en localStorage
            if (icon.classList.contains('fas')) {
                localStorage.setItem(localSection.id, 'favorito'); // Guardar como favorito
            } else {
                localStorage.removeItem(localSection.id); // Remover favorito
            }
        });
    });
});
