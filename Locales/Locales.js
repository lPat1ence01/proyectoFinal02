document.addEventListener('DOMContentLoaded', function() {
    function handleSliderNavigation(container, direction) {
        const scrollAmount = 300;
        if (direction === 'next') {
            container.scrollLeft += scrollAmount;
        } else {
            container.scrollLeft -= scrollAmount;
        }
    }

    // Configurar los botones de navegación para cada slider
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
    });

    // Funcionalidad del buscador
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
    }

    // Funcionalidad de favoritos mejorada
    document.querySelectorAll('.favorito').forEach((btn, index) => {
        // Crear un ID único para cada botón basado en su contexto
        const localSection = btn.closest('.local-seccion');
        const localTitle = localSection?.querySelector('.local-titulo h2')?.textContent || '';
        const favoriteId = `favorite-local-${localTitle.replace(/\s+/g, '-').toLowerCase()}`;
        
        // Asignar el ID al elemento padre
        if (localSection) {
            localSection.dataset.id = favoriteId;
        }

        // Recuperar el estado guardado
        if (localStorage.getItem(favoriteId) === 'true') {
            const icon = btn.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.classList.add('active');
            // Activar el rayo si está guardado como favorito
            const rayo = localSection.querySelector('.rayo');
            if (rayo) {
                localSection.classList.add('favorito-activado');
            }
        }

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            // Toggle de clases
            this.classList.toggle('active');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');

            // Guardar estado en localStorage
            const isActive = icon.classList.contains('fas');
            localStorage.setItem(favoriteId, isActive);

            // Efecto de rayo
            localSection.classList.toggle('favorito-activado');

            // Efecto de animación del corazón
            icon.style.animation = 'none';
            icon.offsetHeight; // Trigger reflow
            icon.style.animation = 'favorito-animation 0.3s ease';

            // Si tiene rayo, animar
            const rayo = localSection.querySelector('.rayo');
            if (rayo && isActive) {
                rayo.style.animation = 'none';
                rayo.offsetHeight;
                rayo.style.animation = 'rayo-animation 0.6s ease-out forwards';
            }
        });
    });

    // Smooth scrolling para los sliders
    document.querySelectorAll('.productos-slider').forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
});